let darkMode = () => {
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')) localStorage.setItem('darkmode','on');
    else localStorage.removeItem('darkmode');   
}
if(localStorage.getItem('darkmode') == 'on') document.body.classList.add('dark');

console.log('dark mode');
