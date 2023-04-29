export default function splitSlug($page){
    let slug = $page.params.data
    let [top, mid, bot] = slug.split('&');
    let data = [
        top.split(''),
        mid.split(''),
        bot.split('')
    ]
    return data
}