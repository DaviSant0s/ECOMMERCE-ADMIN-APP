import { useState } from 'react';
import './styles.css';
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import { IoIosCheckbox, 
         IoIosCheckboxOutline, 
         IoIosArrowForward, 
         IoIosArrowDown } from "react-icons/io";


export default function CategoryHierarchy({categories}) {

  const [expanded, setExpanded] = useState([]);
  const [checked, setChecked] = useState([]);

  const renderCategories = (categories) => {

      return categories.map(category => (
        {
          label: category.name,
          value: category.id,
          children: category.children.length > 0 && renderCategories(category.children)
        }
          
      ));
  
  }

  return (

    <CheckboxTree
        nodes={renderCategories(categories)}
        checked={checked}
        expanded={expanded}
        onCheck={checked => setChecked(checked)}
        onExpand={expanded => setExpanded(expanded)}
        icons={{
            check: <IoIosCheckbox/>,
            uncheck: <IoIosCheckboxOutline/>,
            halfCheck: <IoIosCheckboxOutline/>,
            expandClose: <IoIosArrowForward/>,
            expandOpen: <IoIosArrowDown/>
        }}
    />
  )

}
