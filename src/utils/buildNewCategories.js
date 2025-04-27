export const buildNewCategories = (parentId, categories, category) => {
    let myCategories = [];

    if(parentId == ""){
        return [
            ...categories,
            {
                id: category.id,
                name: category.name,
                slug: category.slug,
                type: category.type,
                children: []
            }
        ];
    }
    
    for(let cat of categories){

        if(cat.id == parentId){
            const newCategory = {
                id: category.id,
                name: category.name,
                slug: category.slug,
                parentId: category.parentId,
                type: category.type,
                children: []
            };
            myCategories.push({
                ...cat,
                children: cat.children.length > 0 ? [...cat.children, newCategory] : [newCategory]
            })
        }else{
            myCategories.push({
                ...cat,
                children: cat.children ? buildNewCategories(parentId, cat.children, category) : []
            });
        }

        
    }


    return myCategories;
}