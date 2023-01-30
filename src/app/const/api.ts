export default function api(link: String)
{
    return "https://m1p10mean-nick-soatoavina-back.up.railway.app/Mean_projet/"+link
    // return "http://localhost/Mean_projet/"+link
}

export function pagination(totalPage: Number){
    let page = [];
    for (let i = 1; i <= totalPage; i++) {
        page.push(i);
    }
    return page;
}