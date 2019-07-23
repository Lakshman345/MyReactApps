// import React from "react";

// class Suggestions extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       filteredData: props.tableData,
//       // The active selection's index
//       activeSuggestion: 0,
//       // The suggestions that match the user's input
//       filteredSuggestions: [],
//       // Whether or not the suggestion list is shown
//       showSuggestions: false,
//       // What the user has entered
//       userInput: ""
//     };

//   //   // Filter our suggestions that don't contain the user's input
//   //   this.props.handleChange(
//   //     //suggestions
//   //   const suggestions = this.state.tableData.rows;
//   //   // const userInput = event.target.value;
//   //   console.log("inside onchnage", suggestions);

//   //   const filteredSuggestions = suggestions.filter(
//   //     suggestion =>
//   //       suggestion.firstName
//   //         .toLowerCase()
//   //         .indexOf(event.target.value.toLowerCase()) > -1
//   //   );

//   //   // Update the user input and filtered suggestions, reset the active
//   //   // suggestion and make sure the suggestions are shown
//   //   this.setState({
//   //     activeSuggestion: 0,
//   //     filteredSuggestions,
//   //     showSuggestions: true,
//   //     userInput: event.target.value
//   //   });
//   // )

//   // onKeyDown = e => {
//   //   const { activeSuggestion, filteredSuggestions } = this.state;

//   //   // User pressed the enter key, update the input and close the
//   //   // suggestions
//   //   if (e.keyCode === 13) {
//   //     this.setState({
//   //       activeSuggestion: 0,
//   //       showSuggestions: false,
//   //       userInput: filteredSuggestions[activeSuggestion]
//   //     });
//   //   }
//   //   // User pressed the up arrow, decrement the index
//   //   else if (e.keyCode === 38) {
//   //     if (activeSuggestion === 0) {
//   //       return;
//   //     }

//   //     this.setState({ activeSuggestion: activeSuggestion - 1 });
//   //   }
//   //   // User pressed the down arrow, increment the index
//   //   else if (e.keyCode === 40) {
//   //     if (activeSuggestion - 1 === filteredSuggestions.length) {
//   //       return;
//   //     }

//   //     this.setState({ activeSuggestion: activeSuggestion + 1 });
//   //   }
//    };
//   // Event fired when the user clicks on a suggestion
//   onClick = e => {
//     // Update the user input and reset the rest of the state
//     this.setState({
//       activeSuggestion: 0,
//       filteredSuggestions: [],
//       showSuggestions: false,
//       userInput: e.currentTarget.innerText
//     });
//   };

//   render() {
//     //suggestions
//     let suggestionsListComponent;

//     if (this.state.showSuggestions && this.state.userInput) {
//       if (this.state.filteredSuggestions.length) {
//         console.log(
//           "filteredSuggestions",
//           this.state.filteredSuggestions,
//           this.state.filteredSuggestions.length
//         );
//         suggestionsListComponent = (
//           <ul className="suggestions">
//             {this.state.filteredSuggestions.map((suggestion, index) => {
//               let className;

//               // Flag the active suggestion with a class
//               if (index === this.state.activeSuggestion) {
//                 className = "suggestion-active";
//               }

//               return (
//                 console.log("suggestion", suggestion),
//                 (
//                   <li
//                     className={className}
//                     key={suggestion}
//                     onClick={this.onClick}
//                   >
//                     {suggestion}
//                   </li>
//                 )
//               );
//             })}
//           </ul>
//         );
//       } else {
//         suggestionsListComponent = (
//           <div className="no-suggestions">
//             <em>No suggestions, you're on your own!</em>
//           </div>
//         );
//       }
//     }
//     //end
//     console.log("suggestionsListComponent", suggestionsListComponent);
//     return <div>{suggestionsListComponent}</div>;
//   }
// }
// export default Suggestions;
