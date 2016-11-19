import React, { Component } from 'react';

export default function(getData, fnName, resultName){
  return (MyComponent) => {
    class LoadData extends Component {
      constructor(props) {
        super(props);
        this.state = {
          data: null,
        }
      }

      fetchData = () => {
        getData().then((res) => {
          this.setState({
            data: res
          });
        });
      }

      render(){
        console.log("here", this.props);
        const newProps = {
            ...this.props,
          [fnName]: this.fetchData,
          [resultName]: this.state.data,
        }
        return (
            <div>
                  <MyComponent {...newProps} />
            </div>
        );
      }
    }

    return LoadData;
  };
}