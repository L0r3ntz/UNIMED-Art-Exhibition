// Configuration
const DATASET_ID = 'l0r3ntz/pameran-lukisan';
const BASE_URL = 'https://datasets-server.huggingface.co';

// Embedded data - only real artworks from dataset.csv
const EMBEDDED_DATA = [
    {
        id: "PAM-001",
        title: "Keris nilai martabat orang Jawa",
        artist: "Arief Sholeiman",
        year: 2026,
        medium: "Akrilik",
        dimensions: "100 x 70 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Arief Sholeiman.JPG",
        tags: "budaya jawa, keris, tradisional, spiritual",
        description: "Keris dalam lukisan melambangkan kewibawaan, kesucian, dan keseimbangan kosmis, perpaduan antara kekuatan spiritual dan martabat budaya Jawa.",
        image_url: "https://s3-ap-southeast-1.amazonaws.com/cntatr-assets-ap-southeast-1-250226768838-55a62c9399d4d8a6/2024/05/vimWm8ci-image.png?tr=q-70,c-at_max,w-1000,h-600"
    },
    {
        id: "PAM-002",
        title: "Karya Asysyifa Aulia Riatno",
        artist: "Asysyifa Aulia Riatno",
        year: 2024,
        medium: "Cat Minyak",
        dimensions: "50 x 70 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Asysyifa Aulia Riatno.JPG",
        tags: "cat minyak, modern, natura",
        description: "Karya seni lukis cat minyak oleh Asysyifa Aulia Riatno",
        image_url: ""
    },
    {
        id: "PAM-003",
        title: "Karya Aura Salvia Siregar",
        artist: "Aura Salvia Siregar",
        year: 2024,
        medium: "Cat Minyak",
        dimensions: "50 x 70 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Aura Salvia Siregar.JPG",
        tags: "cat minyak, modern, natura",
        description: "Karya seni lukis cat minyak oleh Aura Salvia Siregar",
        image_url: ""
    },
    {
        id: "PAM-004",
        title: "Karya Catherine Dinara Sianturi",
        artist: "Catherine Dinara Sianturi",
        year: 2024,
        medium: "Cat Minyak",
        dimensions: "50 x 70 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Catherine Dinara Sianturi.JPG",
        tags: "cat minyak, modern, natura",
        description: "Karya seni lukis cat minyak oleh Catherine Dinara Sianturi",
        image_url: ""
    },
    {
        id: "PAM-005",
        title: "Permainan Orang Gadang",
        artist: "Daffa Utama Saragih",
        year: 2026,
        medium: "Cat Minyak",
        dimensions: "50 x 100 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Daffa Utama Saragih.JPG",
        tags: "sosial politik, kritik sosial, ikonografi minang",
        description: "Karya ini mendekonstruksi kemiskinan struktural yang dipelihara oleh elit (Orang Gadang). Garis kuning geometris serupa tenda sirkus melambangkan pandangan penguasa yang kaku, sombong, dan \"tak menapak tanah\"-memandang realitas dari ketinggian otoritas semu. Figur sentral hadir sebagai dalang yang memanipulasi entitas di bawahnya. Dua kerbau yang diadu menjadi metafora rakyat kecil yang dipaksa berkonfrontasi dalam ring sandiwara demi kesenangan politik. Menggunakan ikonografi Minang, lukisan ini menggugat bagaimana tradisi dan nasib rakyat sering kali hanya dijadikan komoditas dalam sirkus kekuasaan.",
        image_url: "https://i.postimg.cc/G3gR1Fxw/pr-pam001.jpg"
    },
    {
        id: "PAM-006",
        title: "Karya Dea Bilqis Ananda Br. Sinaga",
        artist: "Dea Bilqis Ananda Br. Sinaga",
        year: 2024,
        medium: "Cat Minyak",
        dimensions: "50 x 70 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Dea Bilqis Ananda Br. Sinaga.JPG",
        tags: "cat minyak, modern, natura",
        description: "Karya seni lukis cat minyak oleh Dea Bilqis Ananda Br. Sinaga",
        image_url: ""
    },
    {
        id: "PAM-007",
        title: "Karya Dwi Fadhillah",
        artist: "Dwi Fadhillah",
        year: 2024,
        medium: "Cat Minyak",
        dimensions: "50 x 70 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Dwi Fadhillah.JPG",
        tags: "cat minyak, modern, natura",
        description: "Karya seni lukis cat minyak oleh Dwi Fadhillah",
        image_url: ""
    },
    {
        id: "PAM-008",
        title: "Karya Fajar Mikael ",
        artist: "Fajar Mikael",
        year: 2024,
        medium: "Cat Minyak",
        dimensions: "50 x 70 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Fajar Mikael.JPG",
        tags: "cat minyak, modern, natura",
        description: "Karya seni lukis cat minyak oleh Fajar Mikael",
        image_url: ""
    },
    {
        id: "PAM-009",
        title: "Karya Fitrah Aminah",
        artist: "Fitrah Aminah",
        year: 2024,
        medium: "Cat Minyak",
        dimensions: "50 x 70 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Fitrah Aminah.JPG",
        tags: "cat minyak, modern, natura",
        description: "Karya seni lukis cat minyak oleh Fitrah Aminah",
        image_url: ""
    },
    {
        id: "PAM-010",
        title: "Karya Intan Mumtazah Assa_idah",
        artist: "Intan Mumtazah Assa_idah",
        year: 2024,
        medium: "Cat Minyak",
        dimensions: "50 x 70 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Intan Mumtazah Assa_idah.JPG",
        tags: "cat minyak, modern, natura",
        description: "Karya seni lukis cat minyak oleh Intan Mumtazah Assa_idah",
        image_url: ""
    },
    {
        id: "PAM-011",
        title: "Karya Kristin Agustina Simanjuntak",
        artist: "Kristin Agustina Simanjuntak",
        year: 2024,
        medium: "Cat Minyak",
        dimensions: "50 x 70 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Kristin Agustina Simanjuntak.JPG",
        tags: "cat minyak, modern, natura",
        description: "Karya seni lukis cat minyak oleh Kristin Agustina Simanjuntak",
        image_url: ""
    },
    {
        id: "PAM-012",
        title: "Karya Laila Turrahmah Saragih",
        artist: "Laila Turrahmah Saragih",
        year: 2024,
        medium: "Cat Minyak",
        dimensions: "50 x 70 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Laila Turrahmah Saragih.JPG",
        tags: "cat minyak, modern, natura",
        description: "Karya seni lukis cat minyak oleh Laila Turrahmah Saragih",
        image_url: ""
    },
    {
        id: "PAM-013",
        title: "Karya Lois Lodovikus Tarigan",
        artist: "Lois Lodovikus Tarigan",
        year: 2024,
        medium: "Cat Minyak",
        dimensions: "50 x 70 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Lois Lodovikus Tarigan.JPG",
        tags: "cat minyak, modern, natura",
        description: "Karya seni lukis cat minyak oleh Lois Lodovikus Tarigan",
        image_url: ""
    },
    {
        id: "PAM-014",
        title: "Karya Mafaza Aulyani Hadi",
        artist: "Mafaza Aulyani Hadi",
        year: 2024,
        medium: "Cat Minyak",
        dimensions: "50 x 70 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Mafaza Aulyani Hadi.JPG",
        tags: "cat minyak, modern, natura",
        description: "Karya seni lukis cat minyak oleh Mafaza Aulyani Hadi",
        image_url: ""
    },
    {
        id: "PAM-015",
        title: "Karya Mey Waty Aulia",
        artist: "Mey Waty Aulia",
        year: 2024,
        medium: "Cat Minyak",
        dimensions: "50 x 70 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Mey Waty Aulia.JPG",
        tags: "cat minyak, modern, natura",
        description: "Karya seni lukis cat minyak oleh Mey Waty Aulia",
        image_url: ""
    },
    {
        id: "PAM-016",
        title: "Karya Nurul Fadhillah Sembiring",
        artist: "Nurul Fadhillah Sembiring",
        year: 2024,
        medium: "Cat Minyak",
        dimensions: "50 x 70 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Nurul Fadhillah Sembiring.JPG",
        tags: "cat minyak, modern, natura",
        description: "Karya seni lukis cat minyak oleh Nurul Fadhillah Sembiring",
        image_url: ""
    },
    {
        id: "PAM-017",
        title: "Karya Putri Fadillah",
        artist: "Putri Fadillah",
        year: 2024,
        medium: "Cat Minyak",
        dimensions: "50 x 70 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Putri Fadillah.JPG",
        tags: "cat minyak, modern, natura",
        description: "Karya seni lukis cat minyak oleh Putri Fadillah",
        image_url: ""
    },
    {
        id: "PAM-018",
        title: "Karya Rulina Rulianty Sihombing",
        artist: "Rulina Rulianty Sihombing",
        year: 2024,
        medium: "Cat Minyak",
        dimensions: "50 x 70 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Rulina Rulianty Sihombing.JPG",
        tags: "cat minyak, modern, natura",
        description: "Karya seni lukis cat minyak oleh Rulina Rulianty Sihombing",
        image_url: ""
    },
    {
        id: "PAM-019",
        title: "Karya Syarafina Yusrina",
        artist: "Syarafina Yusrina",
        year: 2024,
        medium: "Cat Minyak",
        dimensions: "50 x 70 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Syarafina Yusrina.JPG",
        tags: "cat minyak, modern, natura",
        description: "Karya seni lukis cat minyak oleh Syarafina Yusrina",
        image_url: ""
    },
    {
        id: "PAM-020",
        title: "Karya Triya Ayu Anggreni",
        artist: "Triya Ayu Anggreni",
        year: 2024,
        medium: "Cat Minyak",
        dimensions: "50 x 70 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Triya Ayu Anggreni.JPG",
        tags: "cat minyak, modern, natura",
        description: "Karya seni lukis cat minyak oleh Triya Ayu Anggreni",
        image_url: ""
    },
    {
        id: "PAM-021",
        title: "Karya Abel Calosa G. Malau",
        artist: "Abel Calosa G. Malau",
        year: 2024,
        medium: "Akrilik",
        dimensions: "60 x 80 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Abel Calosa G. Malau.JPG",
        tags: "akrilik, kontemporer, abstrak",
        description: "Karya seni lukis akrilik oleh Abel Calosa G. Malau",
        image_url: ""
    },
    {
        id: "PAM-022",
        title: "Karya Agus Supriono  Silitonga",
        artist: "Agus Supriono  Silitonga",
        year: 2024,
        medium: "Akrilik",
        dimensions: "60 x 80 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Agus Supriono  Silitonga.JPG",
        tags: "akrilik, kontemporer, abstrak",
        description: "Karya seni lukis akrilik oleh Agus Supriono  Silitonga",
        image_url: ""
    },
    {
        id: "PAM-023",
        title: "Karya Alviano Pintubatu",
        artist: "Alviano Pintubatu",
        year: 2024,
        medium: "Akrilik",
        dimensions: "60 x 80 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Alviano Pintubatu.JPG",
        tags: "akrilik, kontemporer, abstrak",
        description: "Karya seni lukis akrilik oleh Alviano Pintubatu",
        image_url: ""
    },
    {
        id: "PAM-024",
        title: "Karya Bella Ariza Dwinanta Tambusai",
        artist: "Bella Ariza Dwinanta Tambusai",
        year: 2024,
        medium: "Akrilik",
        dimensions: "60 x 80 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Bella Ariza Dwinanta Tambusai.JPG",
        tags: "akrilik, kontemporer, abstrak",
        description: "Karya seni lukis akrilik oleh Bella Ariza Dwinanta Tambusai",
        image_url: ""
    },
    {
        id: "PAM-025",
        title: "Karya Dedek Retno Reviola Rukmana",
        artist: "Dedek Retno Reviola Rukmana",
        year: 2024,
        medium: "Akrilik",
        dimensions: "60 x 80 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Dedek Retno Reviola Rukmana.JPG",
        tags: "akrilik, kontemporer, abstrak",
        description: "Karya seni lukis akrilik oleh Dedek Retno Reviola Rukmana",
        image_url: ""
    },
    {
        id: "PAM-026",
        title: "Karya Dita Audina",
        artist: "Dita Audina",
        year: 2024,
        medium: "Akrilik",
        dimensions: "60 x 80 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Dita Audina.JPG",
        tags: "akrilik, kontemporer, abstrak",
        description: "Karya seni lukis akrilik oleh Dita Audina",
        image_url: ""
    },
    {
        id: "PAM-027",
        title: "Karya Eydika Novelihardo Sipayung",
        artist: "Eydika Novelihardo Sipayung",
        year: 2024,
        medium: "Akrilik",
        dimensions: "60 x 80 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Eydika Novelihardo Sipayung.JPG",
        tags: "akrilik, kontemporer, abstrak",
        description: "Karya seni lukis akrilik oleh Eydika Novelihardo Sipayung",
        image_url: ""
    },
    {
        id: "PAM-028",
        title: "Karya Fathia Syahidah Damanik",
        artist: "Fathia Syahidah Damanik",
        year: 2024,
        medium: "Akrilik",
        dimensions: "60 x 80 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Fathia Syahidah Damanik.JPG",
        tags: "akrilik, kontemporer, abstrak",
        description: "Karya seni lukis akrilik oleh Fathia Syahidah Damanik",
        image_url: ""
    },
    {
        id: "PAM-029",
        title: "Karya Fitria Ariska Putri",
        artist: "Fitria Ariska Putri",
        year: 2024,
        medium: "Akrilik",
        dimensions: "60 x 80 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Fitria Ariska Putri.JPG",
        tags: "akrilik, kontemporer, abstrak",
        description: "Karya seni lukis akrilik oleh Fitria Ariska Putri",
        image_url: ""
    },
    {
        id: "PAM-030",
        title: "Karya Iureka Putri Manurung",
        artist: "Iureka Putri Manurung",
        year: 2024,
        medium: "Akrilik",
        dimensions: "60 x 80 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Iureka Putri Manurung.JPG",
        tags: "akrilik, kontemporer, abstrak",
        description: "Karya seni lukis akrilik oleh Iureka Putri Manurung",
        image_url: ""
    },
    {
        id: "PAM-031",
        title: "Tano Andaliman",
        artist: "Jesika Marilyn Veronica Napitupulu",
        year: 2024,
        medium: "Batik Tulis",
        dimensions: "60 x 80 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Jesika Marilyn Veronica Napitupulu.JPG",
        tags: "batik tulis, andaliman, budaya batak, tradisional",
        description: "Tano Andaliman merupakan karya batik tulis yang terinspirasi dari andaliman, rempah khas Batak yang tumbuh subur di tanah Batak dan menjadi bagian penting dalam kehidupan masyarakatnya. Selain dikenal sebagai bumbu utama dalam berbagai masakan tradisional seperti arsik, andaliman juga dimaknai sebagai simbol kekayaan alam, identitas budaya, serta keterikatan masyarakat Batak terhadap tanah asalnya. Karya ini terbagi menjadi tiga panel yang merepresentasikan tiga nilai filosofis dalam budaya Batak melalui tiga warna utama, yaitu merah, putih, dan hitam. Warna merah dimaknai sebagai Hagogoon, yaitu kekuatan dan keberanian untuk bertahan serta bertumbuh. Warna putih dimaknai sebagai Sohaliapan, yang melambangkan kesucian, ketulusan, dan keseimbangan hidup. Sementara warna hitam dimaknai sebagai Hahomion, simbol kehormatan, kewibawaan, dan keagungan dalam kehidupan masyarakat Batak. Pada panel dominan merah, divisualisasikan siklus pertumbuhan andaliman mulai dari bunga hingga buah yang matang dan meletup. Proses tersebut menjadi simbol keberanian dalam menghadapi perjalanan pertumbuhan dan perubahan kehidupan. Bentuk-bentuk dekoratif yang disusun berulang menghadirkan kesan dinamis sekaligus menggambarkan kesinambungan antara alam dan kehidupan manusia. Panel dominan putih menghadirkan motif Duri Marende atau \"duri bernyanyi\" yang ditempatkan pada sisi kain sebagai elemen penjaga. Duri dimaknai bukan hanya sebagai bentuk perlindungan, tetapi juga sebagai simbol harmoni antara ketegasan dan keindahan. Kehadirannya menjadi representasi nilai Sohaliapan, yaitu kesucian yang dijaga melalui keseimbangan dan kekuatan batin. Sementara itu, panel dominan hitam menampilkan motif buah andaliman secara lebih sederhana dan tegas sebagai pusat visual utama. Warna hitam merepresentasikan Hahomion, yaitu keagungan dan kehormatan tanah Batak, sekaligus menegaskan keistimewaan andaliman sebagai rempah khas yang tumbuh dari tanah yang kaya akan tradisi dan identitas budaya. Melalui Tano Andaliman, pencipta menghadirkan batik sebagai medium untuk merawat ingatan budaya dan memperkenalkan identitas lokal Batak melalui bahasa visual dekoratif. Karya ini menjadi bentuk penghormatan terhadap tanah Batak, kekayaan alamnya, serta warisan budaya yang terus hidup dan diwariskan dari generasi ke generasi.",
        image_url: ""
    },
    {
        id: "PAM-032",
        title: "Karya Nikson Fardy Pardede",
        artist: "Nikson Fardy Pardede",
        year: 2024,
        medium: "Akrilik",
        dimensions: "60 x 80 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Nikson Fardy Pardede.JPG",
        tags: "akrilik, kontemporer, abstrak",
        description: "Karya seni lukis akrilik oleh Nikson Fardy Pardede",
        image_url: ""
    },
    {
        id: "PAM-033",
        title: "Karya Rahma Delila Harahap",
        artist: "Rahma Delila Harahap",
        year: 2024,
        medium: "Akrilik",
        dimensions: "60 x 80 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Rahma Delila Harahap.JPG",
        tags: "akrilik, kontemporer, abstrak",
        description: "Karya seni lukis akrilik oleh Rahma Delila Harahap",
        image_url: ""
    },
    {
        id: "PAM-034",
        title: "Karya Rahmatul Adania",
        artist: "Rahmatul Adania",
        year: 2024,
        medium: "Akrilik",
        dimensions: "60 x 80 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Rahmatul Adania.JPG",
        tags: "akrilik, kontemporer, abstrak",
        description: "Karya seni lukis akrilik oleh Rahmatul Adania",
        image_url: ""
    },
    {
        id: "PAM-035",
        title: "Karya Reno Rivandi",
        artist: "Reno Rivandi",
        year: 2024,
        medium: "Akrilik",
        dimensions: "60 x 80 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Reno Rivandi.JPG",
        tags: "akrilik, kontemporer, abstrak",
        description: "Karya seni lukis akrilik oleh Reno Rivandi",
        image_url: ""
    },
    {
        id: "PAM-036",
        title: "Karya Tazlila Irfani",
        artist: "Tazlila Irfani",
        year: 2024,
        medium: "Akrilik",
        dimensions: "60 x 80 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Tazlila Irfani.JPG",
        tags: "akrilik, kontemporer, abstrak",
        description: "Karya seni lukis akrilik oleh Tazlila Irfani",
        image_url: ""
    },
    {
        id: "PAM-037",
        title: "Karya Therechya Uted Recht Sitompul",
        artist: "Therechya Uted Recht Sitompul",
        year: 2024,
        medium: "Akrilik",
        dimensions: "60 x 80 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Therechya Uted Recht Sitompul.JPG",
        tags: "akrilik, kontemporer, abstrak",
        description: "Karya seni lukis akrilik oleh Therechya Uted Recht Sitompul",
        image_url: ""
    },
    {
        id: "PAM-038",
        title: "Karya Thresia Napitupulu",
        artist: "Thresia Napitupulu",
        year: 2024,
        medium: "Akrilik",
        dimensions: "60 x 80 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Thresia Napitupulu.JPG",
        tags: "akrilik, kontemporer, abstrak",
        description: "Karya seni lukis akrilik oleh Thresia Napitupulu",
        image_url: ""
    },
    {
        id: "PAM-039",
        title: "Karya Windi Wulandari",
        artist: "Windi Wulandari",
        year: 2024,
        medium: "Akrilik",
        dimensions: "60 x 80 cm",
        artist_photo_url: "https://huggingface.co/l0r3ntz/artist-photos/resolve/main/artists/Windi Wulandari.JPG",
        tags: "akrilik, kontemporer, abstrak",
        description: "Karya seni lukis akrilik oleh Windi Wulandari",
        image_url: ""
    }
];

let allArtworks = [];

// Navbar scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Fetch data - use embedded as primary, API as optional update
async function fetchArtworks() {
    // Use embedded data as primary source (2 real artworks)
    allArtworks = EMBEDDED_DATA;
    
    // Try to fetch from API as optional update
    try {
        const response = await fetch(`${BASE_URL}/rows?dataset=${DATASET_ID}&config=default&split=train&offset=0&length=100`);
        const data = await response.json();
        console.log('API response:', data);
        if (data.rows && data.rows.length > 0) {
            // Optionally merge API data if needed
            // For now, we prioritize embedded data for reliability
        }
    } catch (e) { 
        console.warn('API fetch failed, using embedded data.', e);
    }
    console.log('Total artworks loaded:', allArtworks.length);
    return allArtworks;
}

// Render
function renderArtworks(artworks) {
    const grid = document.getElementById('artworkGrid');
    const empty = document.getElementById('emptyState');
    grid.innerHTML = '';
    if (!artworks.length) {
        empty.style.display = 'block';
        return;
    }
    empty.style.display = 'none';
    artworks.forEach((art, i) => {
        const card = document.createElement('div');
        card.className = 'artwork-card';
        card.style.animationDelay = `${i * 0.05}s`;
        card.onclick = () => showModal(art);
        const imgHtml = art.image_url
            ? `<img src="${art.image_url}" alt="${art.title}" loading="lazy">`
            : `<div class="card-image-placeholder">${art.title.charAt(0)}</div>`;
        
        const artistPhotoHtml = art.artist_photo_url
            ? `<img src="${art.artist_photo_url}" alt="${art.artist}" class="artist-photo-small" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`
            : '';
        const artistPlaceholderHtml = `<div class="artist-photo-placeholder-small" style="display: ${art.artist_photo_url ? 'none' : 'flex'}">${art.artist.charAt(0).toUpperCase()}</div>`;
        
        const tags = art.tags ? art.tags.split(',').map(t => `<span class="tag">${t.trim()}</span>`).join('') : '';
        card.innerHTML = `
            <div class="card-image">${imgHtml}</div>
            <div class="card-content">
                <h3>${art.title}</h3>
                <div class="card-artist">
                    ${artistPhotoHtml}
                    ${artistPlaceholderHtml}
                    <span>${art.artist}</span>
                </div>
                <div class="card-meta">
                    <span><i class="fas fa-calendar"></i> ${art.year}</span>
                    <span><i class="fas fa-palette"></i> ${art.medium}</span>
                </div>
                <div class="card-tags">${tags}</div>
            </div>`;
        grid.appendChild(card);
    });
}

function filterArtworks() {
    const q = document.getElementById('searchInput').value.toLowerCase();
    const m = document.getElementById('mediumFilter').value;
    const filtered = allArtworks.filter(a =>
        (!q || a.id.toLowerCase().includes(q) || a.title.toLowerCase().includes(q) || a.artist.toLowerCase().includes(q) || (a.tags && a.tags.toLowerCase().includes(q))) &&
        (!m || a.medium === m)
    );
    renderArtworks(filtered);
    updateStats(filtered);
}

function updateStats(artworks = allArtworks) {
    document.getElementById('heroTotal').textContent = artworks.length;
    document.getElementById('heroArtists').textContent = [...new Set(artworks.map(a => a.artist))].length;
    document.getElementById('aboutTotal').textContent = artworks.length;
    document.getElementById('aboutArtists').textContent = [...new Set(artworks.map(a => a.artist))].length;
}

function showModal(art) {
    const modal = document.getElementById('artworkModal');
    const body = document.getElementById('modalBody');
    const imgHtml = art.image_url ? `<img src="${art.image_url}" alt="${art.title}" class="modal-image">` : '';
    
    const artistPhotoHtml = art.artist_photo_url
        ? `<img src="${art.artist_photo_url}" alt="${art.artist}" class="modal-artist-photo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`
        : '';
    const artistPlaceholderHtml = `<div class="modal-artist-photo-placeholder" style="display: ${art.artist_photo_url ? 'none' : 'flex'}">${art.artist.charAt(0).toUpperCase()}</div>`;
    
    const tags = art.tags ? art.tags.split(',').map(t => `<span class="tag">${t.trim()}</span>`).join(' ') : '';
    body.innerHTML = `
        ${imgHtml}
        <div class="modal-details">
            <h2>${art.title}</h2>
            <div class="detail-grid">
                <div><div class="detail-label">ID</div><div class="detail-value">${art.id}</div></div>
                <div><div class="detail-label">Artist</div><div class="modal-artist">${artistPhotoHtml}${artistPlaceholderHtml}<span>${art.artist}</span></div></div>
                <div><div class="detail-label">Year</div><div class="detail-value">${art.year}</div></div>
                <div><div class="detail-label">Medium</div><div class="detail-value">${art.medium}</div></div>
                <div><div class="detail-label">Dimensions</div><div class="detail-value">${art.dimensions}</div></div>
            </div>
            <div class="detail-tags">${tags}</div>
            <div class="description-section">
                <h3><i class="fas fa-info-circle"></i> Description</h3>
                <p>${art.description || 'No description available.'}</p>
            </div>
        </div>`;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('artworkModal').classList.remove('active');
    document.body.style.overflow = '';
}

document.querySelector('.modal-close').onclick = closeModal;
window.onclick = e => { if (e.target === document.getElementById('artworkModal')) closeModal(); };
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

document.getElementById('searchInput').addEventListener('input', filterArtworks);
document.getElementById('mediumFilter').addEventListener('change', filterArtworks);

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
});

// Auto-hide preloader after 8 seconds as fallback
setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (preloader && preloader.style.display !== 'none') {
        preloader.classList.add('fade-out');
        setTimeout(() => { preloader.style.display = 'none'; }, 800);
    }
}, 8000);

// Initialize
(async () => {
    await fetchArtworks();
    renderArtworks(allArtworks);
    updateStats();
})();
