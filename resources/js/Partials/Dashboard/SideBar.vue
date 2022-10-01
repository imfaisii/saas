<template>
    <aside class="sidebar-wrapper">
        <div class="sidebar sidebar-collapse" id="sidebar">
            <div class="sidebar__menu-group">
                <ul class="sidebar_nav">
                    <li class="menu-title">
                        <span>Main menu</span>
                    </li>
                    <li class="has-child open">
                        <a href="#" class="active">
                            <span data-feather="home" class="nav-icon"></span>
                            <span class="menu-text">Dashboard</span>
                            <span class="toggle-icon"></span>
                        </a>
                        <ul>
                            <li>
                                <Link href="/test">Test</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="changelog.html" class="">
                            <span data-feather="activity" class="nav-icon"></span>
                            <span class="menu-text">Changelog</span>
                            <span class="badge badge-primary menuItem">2.1.6</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
</template>