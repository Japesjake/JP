function splitSlug(slug){
    let [top, mid, bot] = slug.split('&');
        let data = [
        top.split(''),
        mid.split(''),
        bot.split('')
    ]
    return data
}