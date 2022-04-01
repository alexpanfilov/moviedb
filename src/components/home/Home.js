import React from 'react'
import Slide  from './carousel/Slide';
import MoviesList from './movielist/MoviesList';
import PeopleList from './peoplelist/PeopleList';
import TopRated from './toprated/TopRated';


export default function Home() {
    return (
        <>
        <Slide />
        <MoviesList />
        <PeopleList />
        <TopRated />
        </>
    )
}
