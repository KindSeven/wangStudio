import { request } from "../utils/request";

export function getArticleLists() {
    return request({
        url: '/article/list',
        method: 'get'
    })
}

export function getArticleTypeList() {
    return request({
        url: '/article/typelist',
        method: 'get'
    })
}

export function createArticle(data) {
    return request({
        url: '/article',
        method: 'post',
        data
    })
}

export function getAllArticle() {
    return request({
        url: '/article',
        method: 'get',
    })
}

export function getArticleDetails(id) {
    return request({
        url: `/article/${id}`,
        method: 'get',
    })
}

export function updateArticle(id, data) {
    return request({
        url: `/article/${id}`,
        method: 'put',
        data
    })
}

export function deleteArticle(id) {
    return request({
        url: `/article/${id}`,
        method: 'delete'
    })
}