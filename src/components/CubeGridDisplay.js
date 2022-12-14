import React from 'react'
import ScrambleCSS from './style/Scramble.module.css'

class CubeGridDisplay extends React.Component {
    constructor(props){
        super(props);
    }
    state={
        button_classname: ScrambleCSS.fancy,
        cube_classname: ScrambleCSS.show_front
    }
    render(){
        this.colors = this.props.settings.colors;
        let cube_grid = [];
        for (let i=0; i<6; i++){//for each side
            let side = [];
            for(let j = 0; j<3; j++){//for each row
                let row = [];
                for(let k=0; k<3; k++){//for each tile
                    row.push(this.tile_styled((i*9)+(j*3)+k));
                }
                side.push(<tr>{row}</tr>);
            }
            cube_grid.push(<table><tbody>{side}</tbody></table>);
        }

        return (
        <div>
            <div className={this.state.button_classname} id={ScrambleCSS.cube_container}>
                <div id={ScrambleCSS.cube_grid} className={this.state.cube_classname}>
                    {cube_grid}
                </div>
            </div>
            <div id={ScrambleCSS.cube_buttons}>
                {this.generate_button()}
                <button onClick={this.change_view.bind(this)}>change view</button>
            </div>
        </div>);
    }
    cube_display_3d = true
    front_side_displayed = false
    tile_styled(tile_number){
        return (
            <td style={{backgroundColor: this.colors[this.props.scramble[tile_number]]}}></td>
        )
    }
    change_view(){
        if(this.cube_display_3d){
            this.setState({button_classname: ScrambleCSS.simple});
        }else{
            this.setState({button_classname: ScrambleCSS.fancy});
        }   
        this.cube_display_3d = !this.cube_display_3d;
    }
    generate_button(){
        if(this.cube_display_3d)return <button id={ScrambleCSS.turn_3d_cube} onClick={this.change_side.bind(this)}>turn cube</button>
    }
    change_side(){
        if(this.front_side_displayed){
            this.setState({cube_classname: ScrambleCSS.show_front});
        }else{
            this.setState({cube_classname: ScrambleCSS.show_back});
        }   
        this.front_side_displayed = !this.front_side_displayed;
    }
}

export default CubeGridDisplay