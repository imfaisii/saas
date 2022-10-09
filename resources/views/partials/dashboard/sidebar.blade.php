<aside class="sidebar-wrapper">
    <div class="sidebar sidebar-collapse" id="sidebar">
        <div class="sidebar__menu-group">
            <ul class="sidebar_nav">
                <li class="menu-title">
                    <span>Main menu</span>
                </li>
                <li>
                    <a href="{{ route('dashboard.home') }}" class="{{ activeRoute('dashboard.home') }}">
                        <span data-feather="home" class="nav-icon"></span>
                        <span class="menu-text">Dashboard</span>
                    </a>
                </li>
                <li class="has-child open">
                    <a href="#" class="">
                        <span data-feather="activity" class="nav-icon"></span>
                        <span class="menu-text">Changelog</span>
                        <span class="badge badge-primary menuItem">2.1.6</span>
                        <span class="toggle-icon"></span>
                    </a>
                    <ul>
                        <li>
                            <a class="" href="index.html">Social Media</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</aside>
