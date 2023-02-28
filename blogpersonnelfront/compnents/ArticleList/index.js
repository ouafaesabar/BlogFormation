import List from "@mui/material/List";
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router'
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Link } from "next/router"
import PaginationItem from '@mui/material/PaginationItem';
import { useGetArticles } from 'hooks/useGetArticles';
import ArticleCard from "compnents/ArticleCard";
import { ListItem } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';





const ArticleList = (props) => {

    const {
        isLoading,
        isError,
        pageArticles
    } = props

    const Content = () => {
        return (
            <Pagination
                page={pageArticles.pageable.pageNumber + 1}
                count={pageArticles.totalPages}
                renderItem={(item) => (
                    <PaginationItem
                        component={Link}
                        href={`/Articles/${item.page}`}
                        slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                        {...item}
                    />
                )}
            />
        );
    }

    if (isLoading) return <Typography>Loading ...</Typography>
    if (isError) return <>Error</>
    if (pageArticles) {
        const Articles = pageArticles.content
        return (<>

            <List p="10" pt="3" spacing={2}
                sx={{
                    width: "80%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                {Articles && Articles.map((article) => {
                    return (
                        <ListItem key={article.articleId}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                            <ArticleCard article={article} />
                        </ListItem>
                    )
                })}
            </List>

            <MemoryRouter initialEntries={['/Articles']} initialIndex={0}>
                <Routes>
                    <Route path="*" element={<Content />} />
                </Routes>
            </MemoryRouter>

        </>
        );
    }
}

export default ArticleList;