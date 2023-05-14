export default function splitSlug($page){
    let slug = $page.params.data
    let [left, mid, right, turn] = slug.split('&');
        let data = [
        left.split(''),
        mid.split(''),
        right.split('')
    ]
    return [data, turn]
}