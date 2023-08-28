import PlaylistItem from '../playlistItem/playlistItem'
import * as S from './playlist.style'

function Playlist() {
  return (
    <S.ContentPlaylist>
      <PlaylistItem
        trackTitle="Guilt"
        trackTitleExtra=""
        trackAuthor="Nero"
        trackAlbum="Welcome Reality"
        trackTime="4:44"
      />
      <PlaylistItem
        trackTitle="Elektro"
        trackTitleExtra=""
        trackAuthor="Dynoro, Outwork, Mr. Gee"
        trackAlbum="Elektro"
        trackTime="2:22"
      />
      <PlaylistItem
        trackTitle="Im Fire"
        trackTitleExtra=""
        trackAuthor="Ali Bakgor"
        trackAlbum="Im Fire"
        trackTime="2:22"
      />
      <PlaylistItem
        trackTitle="Non Stop"
        trackTitleExtra="  (Remix)"
        trackAuthor="Стоункат, Psychopath"
        trackAlbum="Non Stop"
        trackTime="4:12"
      />
      <PlaylistItem
        trackTitle="Run Run"
        trackTitleExtra="  (feat. AR/CO)"
        trackAuthor="Jaded, Will Clarke, AR/CO"
        trackAlbum="Run Run"
        trackTime="2:54"
      />
      <PlaylistItem
        trackTitle="Eyes on Fire"
        trackTitleExtra="  (Zeds Dead Remix)"
        trackAuthor="Blue Foundation, Zeds Dead"
        trackAlbum="Eyes on Fire"
        trackTime="5:20"
      />
      <PlaylistItem
        trackTitle="Mucho Bien"
        trackTitleExtra="  (Hi Profile Remix)"
        trackAuthor="HYBIT, Mr. Black, Offer Nissim, Hi Profile"
        trackAlbum="Mucho Bien"
        trackTime="3:41"
      />
      <PlaylistItem
        trackTitle="Knives n Cherries"
        trackTitleExtra=""
        trackAuthor="minthaze"
        trackAlbum="Captivating"
        trackTime="1:48"
      />
      <PlaylistItem
        trackTitle="How Deep Is Your Love"
        trackTitleExtra=""
        trackAuthor="Calvin Harris, Disciples"
        trackAlbum="How Deep Is Your Love"
        trackTime="3:32"
      />
      <PlaylistItem
        trackTitle="Morena"
        trackTitleExtra=""
        trackAuthor="Tom Boxer"
        trackAlbum="Soundz Made in Romania"
        trackTime="3:36"
      />
    </S.ContentPlaylist>
  )
}

export default Playlist
