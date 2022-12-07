let products = [
    { id: 1, name: "uno", category: 'indumentaria', description: "bla etc lorem", stock: 20, img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw892d0dcb/products/NI_AR5004-010/NI_AR5004-010-1.JPG"},
    { id: 2, name: "dos",  category: 'indumentaria',description: "etc lorem etc etc etc skoksoaaskaskasdasdasdasdasdsa", stock: 20, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT34qwe-AcfV8C4omKrjjwvZnpsSWrvLY2G0g&usqp=CAU"},
    { id: 3, name: "EJtres",  category: 'arte', description: "etc lorem", stock: 20, img: "https://media.admagazine.com/photos/618a6acbcc7069ed5077ca7f/master/w_1600%2Cc_limit/68704.jpg"},
    { id: 4, name: "EJcuatro", category: 'arte', description: " etc lorem  texttexttexttexttexttext", stock: 20, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDQWlDGCEXRBOx9JGptYIM38wTjeyLgwfvag&usqp=CAU"},

    { id: 5, name: "EJcinco", category: 'indumentaria', description: "bla etc lorem", stock: 20, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROp1f5kCAF9vAWs3K_-trrqmFUhXDq0h47Zw&usqp=CAU"},

    { id: 6, name: "EJseis", category: 'arte', description: "bla etc lorem", stock: 20, img: "https://media.revistaad.es/photos/60c745c1f8ba795ce91acd92/master/w_1600%2Cc_limit/196890.jpg"}

]
export const gfetch = (id) => {
    return new Promise((res, rej) => {
        const condition = true;
        if(condition) {
            setTimeout(() => {
                res(products)
            }, 1000)
        } else {
            rej("reject")
        }
    
    })
}
