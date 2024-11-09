import { UserObeject } from "@/models/User"
import { NavItems } from "@/models/Header"



export const userInfo: UserObeject = {
    name: 'Aamir Sheikh',
    picture: 'https://files.oaiusercontent.com/file-VC6SMpZnoGeTZnlrpy9iZ4Tf?se=2024-11-09T22%3A10%3A12Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dimage.png&sig=uUK8X3t3gIWRvyc0VAiVpt%2BmzMsaUfhCqYP33JPrQTc%3D',
    heading: 'Welcome to my  Portfolio! I am Aamir Sheikh,a skilled and creative web developer with a passion for creating beautiful, responsive and user-friendly website. I have worked on variety of web projects, ranging from personal blogs to e-commerse platforms..',
    about: `
        <p>I’m a web developer who loves creating websites that are easy to use and look great. I know how to work with front-end technologies like HTML, CSS, and JavaScript/Typescript, and I also have experience with back-end tools like Node.js and python. My focus is on writing clean and efficient code to build reliable and scalable websites that provide a smooth experience for users.</p>
        <p>I’m comfortable using modern frameworks like React and Next.js to build fast and responsive web applications. I prefer using TypeScript to help make my code safer and easier to manage. This allows me to deliver projects that work well and are optimized for performance. I enjoy solving problems and making sure each project is completed on time and meets the needs of users..</p>
        <p>I’m always learning new things to keep up with the latest web development trends and technologies. By staying updated, I can bring fresh ideas and tools to my projects. Whether I’m working alone or with a team, I am dedicated to creating user-friendly websites that are both functional and easy to navigate.</p>
        `,
    skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'BootStrap', 'HTML', 'CSS'],   
}

export const headerItems : NavItems = {
    home :{label :'Home', page:'home'},
    about :{label :'About', page:'about'},
    projects :{label :'Projects', page:'projects'}
}

export const projects = {
    gmail: { image: 'https://i.ibb.co/3y7mjqn/gmail-clone.jpg' },
    flipkart: { image: 'https://i.ibb.co/QDt04mP/maxresdefault.jpg' },
    google: { image: 'https://i.ibb.co/RHpgMcC/google-clone-next.jpg' },
    indeed: { image: 'https://i.ibb.co/tHkM8dD/indeed-clone.jpg' },
    crud: { image: 'https://i.ibb.co/wS41qv7/crud-fullstack.jpg' },
    aws: { image: 'https://i.ibb.co/61756n7/aws-3.jpg' },
    notes: { image: 'https://i.ibb.co/wCN5CVj/notesapp.jpg' }
}