import { createSlice } from "@reduxjs/toolkit";




export const placeSlice = createSlice({
    name: "place",
    initialState: {
        list: [
            {
                destination: 'Sidi Bou Said',
                description: 'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium',
                rating: 5,
                img: 'https://resize.prod.femina.ladmedia.fr/rblr/652,438/img/var/2020-02/sidi-bou-sai-d.jpg',
                vdURL: "https://www.youtube.com/embed/OtJVufo3IrA?si=0tBDuxQS0Nlz63L1"
            },
            {
                destination: 'Ain Draham',
                description: 'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium',
                rating: 4,
                img: 'https://idwey.tn/uploads/0000/633/2022/11/08/inbound4027719939216110183.jpg',
                vdURL: "https://www.youtube.com/embed/OtJVufo3IrA?si=0tBDuxQS0Nlz63L1"
            },
            {
                destination: ' Cap Bon',
                description: 'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium',
                rating: 5,
                img: 'https://www.tunisienumerique.com/wp-content/uploads/2019/08/haouaria-1.jpg',
                vdURL: "https://www.youtube.com/embed/FzpfP-_eC9k?si=hpNeRlkoooA_0hKb"
            },
            {
                destination: ' Douz',
                description: 'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium',
                rating: 3,
                img: 'https://lp-cms-production.imgix.net/2019-06/9c516d0b0fdaf4332c9142ca780a2ece-douz.jpg',
                vdURL: "https://www.youtube.com/embed/OtJVufo3IrA?si=0tBDuxQS0Nlz63L1"
            },
            {
                destination: 'Sbeitla',
                description: 'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium',
                rating: 4,
                img: 'https://live.staticflickr.com/65535/49769780172_2e3458d1f9_z.jpg',
                vdURL: "https://www.youtube.com/embed/OtJVufo3IrA?si=0tBDuxQS0Nlz63L1"
            },
            {
                destination: ' Bizerte ',
                description: 'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium',
                rating: 5,
                img: 'https://www.mifuguemiraison.com/wp-content/uploads/2019/11/bizerte-port-medina-tunisie-1200x812.jpg',
                vdURL:'https://www.youtube.com/embed/uyeXpLjqgxw?si=uO-lzuyEzpZaTsol'
            },
            {
                destination: 'Cap Farina',
                description: 'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium',
                rating: 3,
                img: 'https://voyage-tunisie.info/wp-content/uploads/2017/11/cap-farina3.jpg',
                vdURL:'https://www.youtube.com/embed/KfpcXakUaaA?si=YrF0f5bBDsy34brM'
            },
            {
                destination: 'El Jem',
                description: 'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium',
                rating: 4,
                img: 'https://i.pinimg.com/564x/23/86/ec/2386ecfba601ea6023b91df8a9b22595.jpg',
                vdURL: "https://www.youtube.com/embed/OtJVufo3IrA?si=0tBDuxQS0Nlz63L1"
            },
            {
                destination: 'El Kef',
                description: 'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium',
                rating: 5,
                img: 'https://i.pinimg.com/originals/4b/ce/57/4bce57169e5f95fbb00642841b377271.jpg',
                vdURL:'https://www.youtube.com/embed/xKpNfEQQrWE?si=PeifZK0iC05wxZke'

            },
            {
                destination: 'Zaghouan ',
                description: 'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium',
                rating: 3,
                img: 'https://backoffice.lepetitjournal.com/sites/default/files/2019-11/temple%20des%20eaux%20de%20Zaghouan.jpg',
                vdURL:'https://www.youtube.com/embed/bTJoyAVhJQU?si=kHeUpOHz7sFKeRFC'
            },
            {
                destination: 'Jalta',
                description: 'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium',
                rating: 3,
                img: 'https://carthagemagazine.com/wp-content/uploads/2020/11/Galite-Island-in-North-Africa.jpg',
                vdURL:'https://www.youtube.com/embed/HLqyXjqsyDQ?si=nh04T2jB2MZLgqPk'
            },
            {
                destination: 'Medina',
                description: 'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium',
                rating: 4,
                img: 'https://i.pinimg.com/564x/00/39/d9/0039d9fbfbcf4c3cd6765dae140a72a9.jpg',
                vdURL:'https://www.youtube.com/embed/MrwJz0uoERk?si=v9MLx-0iSKqR4DVW'
            },
            {
                destination: 'Djerba',
                description: 'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium',
                rating: 5,
                img: 'https://i.pinimg.com/564x/3a/a0/bc/3aa0bcc20682dd8dd3b6373c5fb29101.jpg',
                vdURL:''
            },
            {
                destination: 'Matmata',
                description: 'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium',
                rating: 3,
                img: 'https://i.pinimg.com/564x/e4/67/cc/e467ccc265e3433d47731f94237e7125.jpg',
                vdURL: "https://www.youtube.com/embed/OtJVufo3IrA?si=0tBDuxQS0Nlz63L1"
            },
            {
                destination: 'Oued Zitoun',
                description: 'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium',
                rating: 4,
                img: 'https://i.pinimg.com/564x/a9/82/c3/a982c372073afcfc35ec3094635a9f48.jpg',
                vdURL: "https://www.youtube.com/embed/OtJVufo3IrA?si=0tBDuxQS0Nlz63L1"
            },
            {
                destination: 'Jendouba',
                description: 'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium',
                rating: 4,
                img: 'https://scontent.ftun13-1.fna.fbcdn.net/v/t39.30808-6/264010362_1947943685412217_6637832824935374453_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=81MHhpqQ_lEAX9_9ffi&_nc_ht=scontent.ftun13-1.fna&oh=00_AfCM1_WXVh6Wr3ozI9hNcHUooNlhdPkFiyVtPLXnMi0cZw&oe=656A2373',
                vdURL:'https://www.youtube.com/embed/JoOpZRlXJvc?si=vMp6SrN-j8yq4eFC'

            },
            {
                destination: ' Shitana',
                description: 'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium',
                rating: 5,
                img: 'https://voyage-tunisie.info/wp-content/uploads/2017/11/korbous.jpg',
                vdURL:'https://www.youtube.com/embed/E8B6lnuadlQ?si=OonYpkoYgxs98ofV'
            },
            {
                destination: 'Tabarka',
                description: 'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Excepturi, Accusantium',
                rating: 4,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQCH_u5QwWDpSh2Y15tBPn6TsdiSzdCU8obw&usqp=CAU',
                vdURL:'https://www.youtube.com/embed/WOB4Gmqv82A?si=IOSG1UAugw8gr4A8'
            }
        ]
    },
    reducers: {

    }
})


export default placeSlice.reducer
