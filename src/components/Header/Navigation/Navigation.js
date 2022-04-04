import { Component } from "react";
import { StyledNavigation, NavItem, activeNavITem } from "../../styles/Navigation.styled";

export default class extends Component {
    render () {
        let categoriesList = this.props.categories.categoriesList.map(category => { 

            let NewItem = this.props.categories.activeCategory === category.id ? activeNavITem : NavItem  //change active class

            return (
                <NewItem key={category.id} onClick={() => this.props.onCategoryChange(category.id)}>
                    {category.name}
                </NewItem>
            )
        })
        return (
            <StyledNavigation>
                {categoriesList}
            </StyledNavigation>
        )
    }
}