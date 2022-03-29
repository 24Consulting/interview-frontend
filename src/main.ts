import './assets/scss/style.scss'

const app = document.querySelector<HTMLDivElement>('#app')

if (app) {
	app.innerHTML = `
        <h1>Hello 24/Consulting!</h1>
        <a href="https://github.com/24Consulting/interview-frontend" target="_blank">Github Repository</a>
    `
}
