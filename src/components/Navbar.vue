<template>
    <div>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Post</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            
        }
    }
}
</script>

<style>
    nav{
        text-align: center;
    }
    nav ul{
        padding: 0;
    }
    nav li{
        list-style-type: none;
        padding: 8px;
        margin: 0;
        display: inline-block;
    }
</style>