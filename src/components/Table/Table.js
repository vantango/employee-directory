import React, { Component } from "react";
import API from "../../utils/API";
import SearchBar from '../Search/SearchBar';

class Table extends Component {
    state = {
        results: [],
        search: ""
    }

    componentDidMount() {
        this.employeeSearch();
    };

    employeeSearch = () => {
        API.search()
            .then(res => {
                console.log(res.data.results);
                this.setState({ results: res.data.results })
            })
            .catch(err => console.log(err));
    };

    filterEmployees = () => {
        const result = this.state.results.filter(result =>
            result.name.first.toLowerCase() === this.state.search.toLowerCase() || result.name.last.toLowerCase() === this.state.search.toLowerCase())
        this.setState({
            results: result
        })
    };

    sortLastNames = event => {
        event.preventDefault()
        this.setState({
            results: this.state.results.sort((a, b) => {
                return (a.name.last < b.name.last) ? -1 : (a.name.last > b.name.last) ? 1 : 0 || (a.name.last < b.name.last) ? 1 : (a.name.last > b.name.last) ? -1 : 0
            })
        })
    }

    sortFirstNames = event => {
        event.preventDefault()
        this.setState({
            results: this.state.results.sort((a, b) => {
                return (a.name.first < b.name.first) ? -1 : (a.name.first > b.name.first) ? 1 : 0
            })
        })
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.search);
        this.filterEmployees(this.state.search);
        this.setState({ search: "" })
    };


    render() {
        return (
            <div>
                <SearchBar
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    employeeSearch={this.employeeSearch}
                    filterEmployees={this.filterEmployees}
                    sortLastNames={this.sortLastNames}
                    sortFirstNames={this.sortFirstNames}
                />
                <br />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Picture</th>
                            <th scope="col">Name</th>
                            <th scope="col">Location</th>
                            <th scope="col">Email</th>
                            <th scope="col">DOB</th>
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.results.map((employee, i) => (
                            <tr key={i}>
                                <td><img src={employee.picture.thumbnail} /></td>
                                <td>{employee.name.first + " " + employee.name.last}</td>
                                <td>{employee.location.city + ", " + employee.location.state}</td>
                                <td>{employee.email}</td>
                                <td>{employee.dob.date.substring(0, 10)}</td>
                                <td>{employee.phone}</td>
                            </tr>)
                        )}
                    </tbody>
                </table>
            </div >
        );
    }
}

export default Table;