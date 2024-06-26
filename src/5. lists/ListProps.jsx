import React from 'react'
import PropTypes from 'prop-types'

function ListProps(props) {

    const itensLista = props.itens;
    const category = props.category;

    const listFruits = itensLista.map(fruit =>
        <li key={fruit.id}>
            {fruit.name} - {fruit.calories} calories</li>)

  return (
    <>
        <h3 className='list-category'>{category}</h3>
        <ol className='list-itens'>
            {listFruits}
        </ol>
    </>
  )
}
ListProps.propTypes = {
    itens: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number})),
    category: PropTypes.string
}
ListProps.defaultProps = {
    itens: [],
    category: 'Category'
}

export default ListProps