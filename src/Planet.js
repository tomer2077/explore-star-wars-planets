import React, { Fragment } from 'react';
import './Planet.css'

const Planet = ({currentPlanet}) => {
    return (
        <Fragment>
        <nav>
        {/* <button className="button-three" onClick={this.wow}>Random Planet</button> */}

			</nav>
            <h1>{currentPlanet.name}</h1>
        <div className="table-wrapper">
        <table>
            <tbody>
            <tr>
                <td id='rotation'>Rotation Period</td>
                <td>{currentPlanet.rotation_period}</td>
            </tr>
            <tr>
                <td id='orbit'>Orbital Period</td>
                <td>{currentPlanet.orbital_period}</td>
            </tr>
            <tr>
                <td id='diameter'>Diameter</td>
                <td>{currentPlanet.diameter}</td>
            </tr>
            <tr>
                <td id='climate'>Climate</td>
                <td>{currentPlanet.climate}</td>
            </tr>
            <tr>
                <td id='gravity' className='icon'>Gravity</td>
                <td>{currentPlanet.gravity}</td>
            </tr>
            <tr>
                <td id='terrain'>Terrain</td>
                <td>{currentPlanet.terrain}</td>
            </tr>
            <tr>
                <td id='water'>Surface Water</td>
                <td>{currentPlanet.surface_water}</td>
            </tr>
            <tr>
                <td id='population'>Population</td>
                <td>{currentPlanet.population}</td>
            </tr>
            </tbody>
        </table>
        </div>
        </Fragment>
    );
}

export default Planet;