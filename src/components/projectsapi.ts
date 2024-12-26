interface Projects{
    key:number
    name:string
    description:string
    stack:string
    preview?:string
    github:string
}
const ProjectsApi:Projects[] = [
    {
    key:1,
    name: "Coffee Shop",
    description:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    stack:'TypeScript',
    github:'https://github.com/taha293/Coffee-shop',
},
    {
    key:2,
    name: "PanaCloud Clone",
    description:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    stack:'Html,Css',
    github:'https://github.com/taha293/PanaCloud-clone-assignment-with-HTML-and-CSS',
    preview:'https://panacloud-by-taha.vercel.app/'
},
    {
    key:3,
    name: "Resume Builder",
    description:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    stack:'Html,Css',
    github:'https://github.com/taha293/Giaic-ResumeBuilder',
    preview:'https://giaic-resume-builder.vercel.app/'
},
    {
    key:4,
    name: "Static Resume",
    description:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    stack:'Html,Css',
    github:'https://github.com/taha293/Static-Resume',
    preview:'https://static-resume-five-chi.vercel.app/'
},
    {
    key:5,
    name: "Custom Css Web",
    description:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    stack:'Next,React,Ts',
    github:'https://github.com/taha293/multipage-custom-css',
},
    {
    key:6,
    name: "Tailwind Web",
    description:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    stack:'Next,React,Ts',
    github:'https://github.com/taha293/multipage-with-tailwind',
},
    {
    key:7,
    name: "Ecommerce Web",
    description:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    stack:'Next,React,TS',
    github:'https://github.com/taha293/ecommerce-website',
    preview:'https://avion-ecommerce-website.vercel.app/'
},
]
export default ProjectsApi