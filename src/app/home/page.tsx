import {api} from "../../../lib/api";
import { HomeExamItem } from "@/app/home/HomeExamItem";
import { NextResponse } from "next/server";
async function fetchRecommendations(page: number) {
    const res = await api.home.getRecommendations({
        page: page + 1
    })
    console.log(res);
    return res;
}

export default async function Home(props: any) {

    const recommendations = await fetchRecommendations(0)

    return (
        <div>
            <h1>Recommendation</h1>
            {recommendations ? (
                <>
                    {recommendations.jumbotrons && recommendations.jumbotrons.length > 0 && (
                        <div style={{marginTop: '20px'}}>
                            <h2 style={{
                                display: 'inline-block',
                                backgroundColor: '#ff7f00',
                                padding: '10px',
                                textAlign: 'left',
                                borderRadius: '8px',
                                fontWeight: 'bold'
                            }}>Jumbotrons</h2>
                            <ul style={{display: 'flex', flexDirection: 'row', gap: '10px', marginTop: '10px'}}>
                                {recommendations.jumbotrons.map(jumbotron => (
                                    <li key={jumbotron.id} style={{listStyleType: 'none'}}>
                                        <h3>{jumbotron.title}</h3>
                                        <img
                                            src={jumbotron.thumbnailUrl}
                                            alt={jumbotron.title}
                                            style={{width: '150px', height: 'auto'}}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div style={{marginTop: '40px'}}>
                        <h2 style={{
                            display: 'inline-block',
                            backgroundColor: '#ff7f00',
                            padding: '10px',
                            textAlign: 'left',
                            borderRadius: '8px',
                            fontWeight: 'bold'
                        }}>Recommendations</h2>
                        <ul>
                            {recommendations.recommendations.map(recommendation => (
                                <li key={recommendation.id} style={{marginBottom: '20px'}}>
                                    <h3>{recommendation.title}</h3>
                                    <p>{recommendation.tag.name}</p>
                                    <ul style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
                                        {recommendation.exams.map(exam => (
                                          <HomeExamItem
                                            key={exam.id}
                                            id={exam.id}
                                            title={exam.title}
                                            thumbnailUrl={exam.thumbnailUrl}
                                          />
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}