import './playlist.css'
import PlaylistItem from '../playlistItem/playlistItem'

function Playlist() {
  return (
    <div className="content__playlist playlist">
      <PlaylistItem
        tarckTitle="Guilt"
        trackAuthor="Nero"
        trackAlbum="Welcome Reality"
        trackTime="4:44"
      />
      <PlaylistItem
        tarckTitle="Elektro"
        trackAuthor="Dynoro, Outwork, Mr. Gee"
        trackAlbum="Elektro"
        trackTime="2:22"
      />
      <PlaylistItem
        tarckTitle="Im Fire"
        trackAuthor="Ali Bakgor"
        trackAlbum="Im Fire"
        trackTime="2:22"
      />
      <PlaylistItem
        tarckTitle="Non Stop (Remix)"
        trackAuthor="Стоункат, Psychopath"
        trackAlbum="Non Stop"
        trackTime="4:12"
      />
      <PlaylistItem
        tarckTitle="Run Run (feat. AR/CO)"
        trackAuthor="Jaded, Will Clarke, AR/CO"
        trackAlbum="Run Run"
        trackTime="2:54"
      />
      <PlaylistItem
        tarckTitle="Eyes on Fire (Zeds Dead Remix)"
        trackAuthor="Blue Foundation, Zeds Dead"
        trackAlbum="Eyes on Fire"
        trackTime="5:20"
      />
      <PlaylistItem
        tarckTitle="Mucho Bien (Hi Profile Remix)"
        trackAuthor="HYBIT, Mr. Black, Offer Nissim, Hi Profile"
        trackAlbum="Mucho Bien"
        trackTime="3:41"
      />
      <PlaylistItem
        tarckTitle="Knives n Cherries"
        trackAuthor="minthaze"
        trackAlbum="Captivating"
        trackTime="1:48"
      />
      <PlaylistItem
        tarckTitle="Knives n Cherries"
        trackAuthor="minthaze"
        trackAlbum="Captivating"
        trackTime="1:48"
      />
      <PlaylistItem
        tarckTitle="How Deep Is Your Love"
        trackAuthor="Calvin Harris, Disciples"
        trackAlbum="How Deep Is Your Love"
        trackTime="3:32"
      />
      <PlaylistItem
        tarckTitle="Morena"
        trackAuthor="Tom Boxer"
        trackAlbum="Soundz Made in Romania"
        trackTime="3:36"
      />
    </div>
  )
}

export default Playlist
