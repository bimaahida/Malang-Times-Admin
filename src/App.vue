<template>
  <div id="app">
    <div class="cbp-spmenu-push">
      <div class="main-content">
        <!-- menu sidebar -->
          <div class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left" id="cbp-spmenu-s1">
            <aside class="sidebar-left">
              <nav class="navbar navbar-inverse">
                <div class="navbar-header">
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".collapse" aria-expanded="false"></button>
                  <h1><a class="navbar-brand" href="index.html"><span class="fa fa-area-chart"></span> ADMIN<span class="dashboard_text"></span></a></h1>
                </div>

                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul class="sidebar-menu">
                    <li class="header">MAIN NAVIGATION</li>
                    <li class="treeview">
                      <a href="tabel.html">
                        <i class="fa fa-table"></i>
                        <span>User</span>
                      </a>
                    </li>
                    <li class="treeview">
                      <a href="form.html">
                        <i class="fa fa-table"></i>
                        <span>Kategori</span>
                      </a>
                    </li>
                    <li class="treeview">
                      <a href="detail.html">
                        <i class="fa fa-edit"></i>
                        <span>Berita</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </aside>
          </div>
        <!-- end menu sidebar -->

        <!-- menu top -->
          <div class="sticky-header header-section" style="padding-bottom: 11px">
            <div class="header-right">
              <div class="profile_details">		
                <ul>
                  <li class="dropdown profile_details_drop">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                      <div class="profile_img">	
                        <span class="prfil-img"><img src="images/2.jpg" alt=""></span> 
                        <div class="user-name">
                          <p>Admin Name</p>
                          <span>Administrator</span>
                        </div>
                        <i class="fa fa-angle-down lnr"></i>
                        <i class="fa fa-angle-up lnr"></i>
                        <div class="clearfix"></div>	
                      </div>	
                    </a>

                    <ul class="dropdown-menu drp-mnu">
                      <li> <a href="#"><i class="fa fa-user"></i> My Account</a> </li> 
                      <li> <a href="#"><i class="fa fa-sign-out"></i> Logout</a> </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div class="clearfix"></div>
            </div>
            
            <div class="clearfix"></div>
          </div>
        <!-- end menu top -->

        <div id="page-wrapper">
          <div class="main-page">
              <router-view/>
          </div>
        </div>

        <!-- footer -->
        <div class="footer">
          <p>&copy; 2018 Admin | Design by <a href="#" target="_blank">NFS 44</a></p>
        </div>
        <!-- end footer -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
