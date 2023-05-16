import { Component, OnInit } from '@angular/core';
import { ILista } from './book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  lista: ILista[] = [
    {
      id: 1,
      naziv: 'Atomic Habits',
      autor: 'James Clear',
      zanr: 'Popularna nauka',
      opis: ' Džejms Klir, jedan od vodećih svjetskih stručnjaka za formiranje navika, otkriva praktične strategije koje će nas naučiti kako da formiramo dobre navike, razbijemo loše i ovladamo sitnim navikama koje vode do izvanrednih rezultata.',
      slika: 'assets/atomic.jpg',
      cijena: 25.99,
      datumIzdavanja: new Date(2014, 4, 15),
      jezik: 'Srpski',
      brojStranica: 267,
      vidjeti: true,
    },
    {
      id: 2,
      naziv: 'The Lord of the Rings',
      autor: 'J.R.R. Tolkien',
      zanr: 'Fantasy',
      opis: 'Ovo je epska fantastična trilogija koja prati avanture hobita Froda i njegovih prijatelja dok pokušavaju uništiti Zlatni Prsten.',
      slika: 'assets/rings.jpg',
      cijena: 34.99,
      datumIzdavanja: new Date(1954, 6, 29),
      jezik: 'Engleski',
      brojStranica: 1178,
      vidjeti: true,
    },
    {
      id: 3,
      naziv: 'Shoe Dog',
      autor: 'Phil Knight',
      zanr: 'Publicistika',
      opis: 'Knight detaljno opisuje mnoštvo zastrašujućih rizika s kojima se na svom putu suočio, obeshrabrujuće prepreke, nemilosrdne konkurente, sve one koji nisu vjerovali u njega ili su ga mrzili, neprijateljski nastrojene bankare, ali i mnoštvo svojih senzacionalnih trijumfa i teških pobjeda.',
      slika: 'assets/nike.jpg',
      cijena: 69.00,
      datumIzdavanja: new Date(1979, 9, 12),
      jezik: 'Hrvatski',
      brojStranica: 467,
      vidjeti: true,
    },
    {
      id: 4,
      naziv: 'The Da Vinci Code',
      autor: 'Dan Brown',
      zanr: 'Misterija',
      opis: 'Ova knjiga prati profesora simbologije Roberta Langdona u potrazi za istinom iza ubistva kustosa u Luvru i njegovog skrivenog znanja.',
      slika: '',
      cijena: 22.99,
      datumIzdavanja: new Date(2003, 2, 18),
      jezik: 'Engleski',
      brojStranica: 454,
      vidjeti: true,
    },
    {
      id: 5,
      naziv: "It Ends With Us",
      autor: "Colleen Hoover",
      zanr: "Savremeni ljubavni roman",
      opis: "Lily nije uvijek bilo lako, ali to je nikada nije spriječilo da marljivo radi za život kakav želi. Prešla je dug put od gradića u Maineu u kojem je odrasla - završila je fakultet, preselila se u Boston i pokrenula vlastiti posao.",
      slika: 'assets/itends.jpg',
      cijena: 15.99,
      datumIzdavanja: new Date(2015, 1, 13),
      jezik: "Engleski",
      brojStranica: 376,
      vidjeti: true,
    },
    {
      id: 6,
      naziv: "One Hundred Years of Solitude",
      autor: "Gabriel Garcia Marquez",
      zanr: "Magični realizam",
      opis: "Roman prati život porodice Buendía u imaginarnom gradu Macondo u Kolumbiji tokom više od jednog vijeka. Prepun fantastičnih i magičnih elemenata, ovo djelo predstavlja jedno od najvećih dostignuća književnosti 20. vijeka.",
      slika: 'assets/one.jpg',
      cijena: 19.99,
      datumIzdavanja: new Date(1967, 5, 30),
      jezik: "Španski",
      brojStranica: 417,
      vidjeti: true,
    },
    {
      id: 7,
      naziv: "The Hobbit",
      autor: "J.R.R. Tolkien",
      zanr: "Fantazija",
      opis: "Priča prati hobita po imenu Bilbo Baggins koji odlazi na epsku avanturu sa družinom patuljaka kako bi osvojili zlato čuvenog zmaja Smauga. Ovo djelo je preteča kultne trilogije Gospodar prstenova.",
      slika: 'assets/hobbit.jpg',
      cijena: 14.99,
      datumIzdavanja: new Date(1937, 9, 21),
      jezik: "Engleski",
      brojStranica: 310,
      vidjeti: true,
    },
    {
      id: 8,
      naziv: "Mastery",
      autor: "Robert Greene",
      zanr: "Knjiga samopomoci",
      opis: " Study the behaviors of Albert Einstein, Charles Darwin, Leonardo da Vinci and the nine contemporary Masters interviewed for this book.",
      slika: 'assets/mastery.jpg',
      cijena: 12.99,
      datumIzdavanja: new Date(1890, 6, 20),
      jezik: "Engleski",
      brojStranica: 368,
      vidjeti: true,
    },
    {
      id: 9,
      naziv: "Noise",
      autor: "Olivier Sibony",
      zanr: "Knjiga samopomoci",
      opis: "And although noise can be found wherever people are making judgements and decisions, individuals and organizations alike commonly ignore its impact, at great cost.",
      slika: '',
      cijena: 8.99,
      datumIzdavanja: new Date(1897, 3, 28),
      jezik: "Engleski",
      brojStranica: 464,
      vidjeti: true,
    },
    {
      id: 10,
      naziv: "The Hitchhiker's Guide to the Galaxy",
      autor: "Douglas Adams",
      zanr: "Znanstvena fantastika",
      opis: "The Hitchhiker's Guide to the Galaxy is a comedic science fiction series created by Douglas Adams. Originally a radio comedy broadcast on BBC Radio 4 in 1978, it was later adapted to other formats.",
      slika: 'assets/guide.jpg',
      cijena: 10.99,
      datumIzdavanja: new Date(1979, 8, 17),
      jezik: "Engleski",
      brojStranica: 224,
      vidjeti: true,
    },
    {
      id: 11,
      naziv: "The Great Gatsby",
      autor: "F. Scott Fitzgerald",
      zanr: "Roman",
      opis: "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
      slika: '',
      cijena: 11.99,
      datumIzdavanja: new Date(1925, 3, 10),
      jezik: "Engleski",
      brojStranica: 180,
      vidjeti: true,
    },
  ]
  showData: boolean = false;
  showImage: boolean = false;

  // toggleImage() {
  //   this.showImage = !this.showImage;
  // }

  toggleDescriptionBook(id: number) {
    for (var i = 0; i < this.lista.length; i++) {
      if (this.lista[i].id == id)
        this.lista[i].vidjeti = !this.lista[i].vidjeti;
    }
  }

  constructor() {
  }
  ngOnInit(): void {

  }

}
