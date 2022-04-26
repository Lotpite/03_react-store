import { Component } from "react";

import { StyledNavigation, StyledLink, CategoryName } from "../../styles/Navigation.styled";
import { Spinner } from "../../styles/Spinner.styled";

export default class extends Component {
    render () {
        if(!this.props.categories.categoriesList) {
            return <Spinner/>
        }

        let categoriesList = this.props.categories.categoriesList.map(category => { 
            return (
                    <StyledLink to={`/categories/${category.id}`} 
                    key={category.id} 
                    onClick={() => this.props.onCategoryChange(category.id)} 
                    >
                        <CategoryName active={category.active}>
                            {category.name}
                        </CategoryName>
                    </StyledLink>
            )
        })
        return (
            <StyledNavigation>
                {categoriesList}
            </StyledNavigation>
        )
    }
}