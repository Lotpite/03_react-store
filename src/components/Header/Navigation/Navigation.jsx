import { Component } from "react";
import { StyledNavigation, NavItem, activeNavITem } from "../../styles/Navigation.styled";

export default class Navigation extends Component {
    render () {
        let categoriesList = this.props.state.categoriesList.map(category => { 
            let NewItem = category.active ? activeNavITem : NavItem  //change active class
            return (
                <NewItem key={category.id} onClick={() => this.props.onToggleActive(category.id)}>
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