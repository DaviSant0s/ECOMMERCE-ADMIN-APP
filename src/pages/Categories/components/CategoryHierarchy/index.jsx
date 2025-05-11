import { useState } from 'react';
import './styles.css';
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import { IoIosCheckbox, IoIosCheckboxOutline, IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';

export default function CategoryHierarchy({
  categories,
  handleClikEdit,
  handleClickDelete,
  checked,
  setChecked,
  expanded,
  setExpanded,
}) {
  const renderCategories = (categories) => {
    return categories.map((category) => ({
      label: category.name,
      value: category.id,
      children: category.children.length > 0 && renderCategories(category.children),
    }));
  };

  return (
    <div className="categoryHierarchy-container">
      <CheckboxTree
        nodes={renderCategories(categories)}
        checked={checked}
        expanded={expanded}
        onCheck={(checked) => setChecked(checked)}
        onExpand={(expanded) => setExpanded(expanded)}
        icons={{
          check: <IoIosCheckbox />,
          uncheck: <IoIosCheckboxOutline />,
          halfCheck: <IoIosCheckboxOutline />,
          expandClose: <IoIosArrowForward />,
          expandOpen: <IoIosArrowDown />,
        }}
      />
      <div className="buttons-category-container">
        <button onClick={handleClikEdit}>Editar</button>
        <button onClick={handleClickDelete}>Excluir</button>
      </div>
    </div>
  );
}
