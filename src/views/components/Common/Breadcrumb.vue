<template>
    <a-breadcrumb style="margin: 0 0 2% 0">
        <a-breadcrumb-item>
            <router-link to="/">
                首页
            </router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>
            {{ $route.meta.title}}
        </a-breadcrumb-item>
    </a-breadcrumb>
</template>
