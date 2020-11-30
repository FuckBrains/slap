from sqlalchemy import Column, Integer, String

from ..database import db


class SongGenre(db.base.Model):
    _id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)
    source = Column(String)
