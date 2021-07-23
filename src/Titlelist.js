import React from "react";
import Title from "./Title";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

class Titlelist extends React.Component {
  state = {
    titlename: this.props.titlelist[this.props.current],
    posistion: this.props.current,
  };

  componentDidUpdate(props) {
  
    if (this.props.current !== props.current) {
      this.setState({ titlename: this.props.titlelist[this.props.current] });
    }
  }

  click = (titlename) => {
    //console.log(titlename);
    this.setState({ titlename: titlename });
  };

  list = () => {
    let c = 0;
    return this.props.titlelist.map((title, index) => {
      if (c < 3 && index >= this.props.current) {
        c++;
        return (
          <Draggable key={index} draggableId={index.toString()} index={index}>
            {(provided) => (
              <li
                className="list-li"
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
              >
                <Title
                  name={title}
                  click={this.click}
                  design={title === this.state.titlename ? 1 : 0}
                  close={this.props.close}
                />
              </li>
            )}
          </Draggable>
        );
      } else {
        return null;
      }
    });
  };

  handelondragend = (results) => {
 
    if (!results.destination) return;
    this.props.ondrag(results.source.index, results.destination.index);
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.handelondragend}>
        <Droppable droppableId="titles">
          {(provided) => (
            <ul
              className="list"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {this.list()}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      
    );
  }
}

export default Titlelist;
