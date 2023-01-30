export default function api(link: String)
{
    return "http://localhost/Mean_projet/"+link
}

export function pagination(totalPage: Number){
    let page = [];
    for (let i = 1; i <= totalPage; i++) {
        page.push(i);
    }
    return page;
}