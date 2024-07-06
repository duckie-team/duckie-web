'use client';
import {useEffect, useState} from "react";
import {api} from "../../../lib/api";
import {GetRecommendationsResponse} from "../../../lib/client/endpoint/home.endpoint";
import {useSearchParams} from "next/navigation";
import NavBar from "../../../components/common/DuckieNavBar";
import DuckieNavBar from "../../../components/common/DuckieNavBar";

export default function Home() {
    const [recommendations, setRecommendations] = useState<GetRecommendationsResponse | null>(null);
    const searchParams = useSearchParams();
    const page = Number(searchParams.get('page')) || 1;

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const res = await api.home.getRecommendations({
                    page
                });
                setRecommendations(res);
            } catch (error) {
                console.error('Failed to fetch recommendations:', error);
            }
        };

        fetchRecommendations().then();
    }, [page]);

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
                                            <li key={exam.id} style={{listStyleType: 'none'}}>
                                                <h4>{exam.title}</h4>
                                                <img
                                                    src={exam.thumbnailUrl}
                                                    alt={exam.title}
                                                    style={{width: '150px', height: 'auto'}}
                                                />
                                            </li>
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