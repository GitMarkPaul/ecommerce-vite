<template>
    <main>
		<router-view :key="$route.fullPath"></router-view>
	</main>
</template>