from typing import List, Iterable
import json

from django.db import models

from app_v2.models.base import Song
from app_v2.models.spotify import retrieve_from_song_title_and_possible_artists
from app_v2.db.fields import CSVField
from app_v2.db.utils import upsert
from contract_models.song import SongModel
from services.wikidata import retrieve_songmodel_wikidata, retrieve_english_songs as populate_internal

__all__ = [
    'populate_wikidata_english_songs',
    'WikidataSong',
    'WikidataArtist',
]


def populate_wikidata_english_songs():
    song_list: List[SongModel] = populate_internal()
    for song in song_list:
        ws = upsert(WikidataSong, title=song.name, wikidata_id=song.wikidata_id)
        for artist in song.artists:
            p = upsert(WikidataArtist, name=artist.name)
            ws.performers.add(p)
        s: Song = upsert(Song, wikidata_song=ws)
        retrieve_from_song_title_and_possible_artists(song.name, song.artist_names)
        print(song)


class WikidataSong(models.Model):
    title = models.CharField(max_length=255)
    wikidata_id = models.CharField(max_length=13, unique=True,
                                   blank=False)
    performers = models.ManyToManyField('WikidataArtist')

    @classmethod
    def retrieve_song(cls, song_title: str, artists_names: List[str]) -> 'WikidataSong':
        # Ensure that it at least has an ID
        if not artists_names:
            raise TypeError(f"NULL ARTIST!!!!! {artists_names}")
        s = retrieve_songmodel_wikidata(song_title=song_title,
                                        artists=artists_names)
        return upsert(cls, title=s.name, wikidata_id=s.wikidata_id)

    def retrieve_info_from_id(self):
        # TODO: retrieve title, performers, etc. from id
        # TODO: link base Song to YoutubeVideo
        pass


class WikidataArtist(models.Model):
    name = models.CharField(max_length=255)
    alt_names_serialized = models.CharField(max_length=1000)

    @property
    def alt_names(self) -> List[str]:
        return json.loads(self.alt_names_serialized)

    @alt_names.setter
    def alt_names(self, value):
        self.alt_names_serialized = json.dumps(value)
