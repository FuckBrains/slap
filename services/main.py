from repetition import calculate_repetition
from services.genius import search_for_song_lyrics, clean_lyrics
from services.spotify import search_for_song
from support.models import SongModel


def generate_song_to_model(song_name, song_artist) -> SongModel:
    song_artist = song_artist.split(" Featuring")[0]
    s = search_for_song(song_name, song_artist)
    s.lyrics = search_for_song_lyrics(s.name, song_artist)
    s.compressibility = calculate_repetition(clean_lyrics(s.lyrics))
    s.genres = s.genres
    return s
