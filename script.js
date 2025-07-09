console.log('Lets write some javascript')

let sections = document.getElementsByClassName('navright')[0].getElementsByTagName('a')
// console.log(sections)
let targetsection = []
for (let i = 0; i < sections.length; i++) {
    targetsection.push(sections[i].href.split('#')[1])
    //    console.log(targetsection)

}
for (let i = 0; i < sections.length; i++) {
    let target = targetsection[i];

    sections[i].addEventListener('click', (e) => {
        e.preventDefault();
        let t = document.querySelector('#' + target);
        if (t) {
            t.scrollIntoView({ behavior: "smooth" });
        }
    });
}

document.querySelector('.move').getElementsByTagName('img')[0].addEventListener('click', () => {
    document.getElementById('home').scrollIntoView({
        behavior: "smooth"
    })


}
)

let follow = document.getElementsByClassName('dmiddle')[0].getElementsByTagName('li');
// console.log(follow)
let profiles = ["https://www.facebook.com/ayush.maurya.31105674/", "https://x.com/i/flow/login", "https://www.instagram.com/ayush_maurya_iitr/?next=%2F&hl=en", "https://www.linkedin.com/in/ayush-maurya-3b8913325/"]

for (let i = 0; i < follow.length; i++) {
    follow[i].addEventListener('click', () => {
        window.open(profiles[i], "_blank")
    })
}

let mailme = document.querySelector('.dright').getElementsByTagName('li')[0]
console.log(mailme)

mailme.addEventListener('click', () => {
    window.location.href = "mailto:ayushayushayushmaurya@gmail.com";
}
)


const cvButton1 = document.querySelector('.cvbox button');

cvButton1.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'Ayush_Maurya_CV.pdf'; // Your actual CV file name and path
    link.download = 'Ayush_Maurya_CV.pdf'; // Name it will be saved as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
const cvButton2=document.getElementById('second')
cvButton2.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'Ayush_Maurya_CV.pdf'; // Your actual CV file name and path
    link.download = 'Ayush_Maurya_CV.pdf'; // Name it will be saved as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});