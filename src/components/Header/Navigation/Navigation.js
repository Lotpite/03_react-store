import { Component } from "react";
import { StyledNavigation, NavItem, activeNavITem, StyledLink } from "../../styles/Navigation.styled";
import { Link } from "react-router-dom";

export default class extends Component {
    render () {
        let categoriesList = this.props.categories.categoriesList.map(category => { 

            let NewItem = this.props.categories.activeCategory === category.id ? activeNavITem : NavItem  //change active class

            return (
                // <NewItem key={category.id} onClick={() => this.props.onCategoryChange(category.id)}>
                    <StyledLink to={`categories/${category.id}`} key={category.id} onClick={() => this.props.onCategoryChange(category.id)}>
                        {category.name}
                    </StyledLink>
                // </NewItem>
            )
        })
        return (
            <StyledNavigation>
                {categoriesList}
            </StyledNavigation>
        )
    }
}