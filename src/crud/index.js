import React, { Component } from "react";
import { Container } from "react-bootstrap";
import NavbarComponent from "./NavbarComponent";
import Tabel from "./Tabel";
import Formulir from "./Form";

export default class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foods: [],
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        foods: [
          ...this.state.foods,
          {
            id: this.state.foods.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    } else {
      const notSelectedFood = this.state.foods
        .filter((food) => food.id !== this.state.id)
        .map((filterFood) => {
          return filterFood;
        });

        this.setState({
          foods: [
            ...notSelectedFood,
            {
              id: this.state.foods.length + 1,
              nama: this.state.nama,
              deskripsi: this.state.deskripsi,
              harga: this.state.harga,
            },
          ],
        });
    }

    this.setState({
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    });
  };

  editData = (id) => {
    const selectedFood = this.state.foods
      .filter((food) => food.id === id)
      .map((filterFood) => {
        return filterFood;
      });

    this.setState({
      nama: selectedFood[0].nama,
      deskripsi: selectedFood[0].deskripsi,
      harga: selectedFood[0].harga,
      id: selectedFood[0].id,
    });
  };

  hapusData = (id) => {
    const newFoods = this.state.foods
    .filter((food) => food.id !== id)
    .map((filterFood) => {
      return filterFood;
    });

    this.setState({
      foods: newFoods
    })
  }

  render() {
    console.log(this.state.foods);
    return (
      <div>
        <NavbarComponent />
        <Container>
          <div className="container mt-4">
            <Tabel foods={this.state.foods} editData={this.editData} hapusData={this.hapusData} />
            <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          </div>
        </Container>
      </div>
    );
  }
}
