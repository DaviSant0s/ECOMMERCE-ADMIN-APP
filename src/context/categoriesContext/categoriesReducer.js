import { categoriesInitialState } from './categoriesInitialState';
import * as categoriesTypes from './categoriesTypes';


const buildNewCategories = (parentId, categories, category) => {
    let myCategories = [];

    if(parentId == undefined){
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

export const categoriesReducer = (state, action) => {

    switch (action.type) {
        // get
        case categoriesTypes.GET_ALL_CATEGORIES_REQUEST:
            return { 
                ...categoriesInitialState, 
                loading: true,
                error: null
            }

        case categoriesTypes.GET_ALL_CATEGORIES_SUCCESS:
            return { 
                ...state, 
                categories: action.payload.categories,
                loading: false
            }
        
        case categoriesTypes.GET_ALL_CATEGORIES_FAILURE:
            return { 
                ...state, 
                loading: false,
                error: action.payload.error
            }
        
        // create
        case categoriesTypes.CREATE_CATEGORIES_REQUEST:

            return { 
                ...state,
                loading: true,
                error: null
            }

        case categoriesTypes.CREATE_CATEGORIES_SUCCESS:

            const category = action.payload.category;
            const updatedCategories = buildNewCategories(category.parentId, state.categories, category);

            return { 
                ...state, 
                categories: updatedCategories,
                loading: false
            }
        
        case categoriesTypes.CREATE_CATEGORIES_FAILURE:
            return { 
                ...state, 
                loading: false,
                error: action.payload.error
            }
    }

    return state;
}
