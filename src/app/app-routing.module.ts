import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductUpdateComponent } from './pages/product-update/product-update.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';

import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
<<<<<<< HEAD
import { ProductCartComponent } from './pages/product-cart/product-cart.component';
import { ShippingComponent } from './pages/shipping/shipping.component';
<<<<<<< HEAD
=======
import { CustomerInformationComponent } from './components/custommer/customer-information/customer-information.component';
import { CustomerUpdateComponent } from './components/custommer/customer-update/customer-update.component';
>>>>>>> 22fae228dbe1bcea6d61a9bf38380a1ef31330d4
=======
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { CategoryAddComponent } from './pages/category-add/category-add.component';
import { CategoryEditComponent } from './pages/category-edit/category-edit.component';
>>>>>>> 0db69f6ca0d2afdef6c86594fc5273667941b737

const routes: Routes = [
    {
        path: "", component: BaseLayoutComponent, children: [
            { path: "", component: HomePageComponent },
            { path: "list-product", component: ProductListPageComponent },
            { path: "about", component: AboutPageComponent },
            { path: "cart", component: ProductCartComponent },
            { path: "shipping", component: ShippingComponent },
            { path: "product/:id", component: ProductDetailComponent }
        ]
    },
    {
        path: "admin", component: AdminLayoutComponent, children: [
            { path: "", redirectTo: "dashboard", pathMatch: "full" },
            { path: "dashboard", component: DashboardComponent },
            { path: "product", component: ProductListComponent },
            { path: "product/add", component: ProductAddComponent },
            { path: "product/:id/update", component: ProductUpdateComponent },
<<<<<<< HEAD
            { path: "customer", component: CustomerInformationComponent },
=======
            { path: "category", component: CategoryListComponent },
            { path: "category/add", component: CategoryAddComponent },
            { path: "category/:id/edit", component: CategoryEditComponent },
>>>>>>> 0db69f6ca0d2afdef6c86594fc5273667941b737
        ]
    },
    {

        path: "signup", component: SignupComponent, children: []
    },
    {
        path: "signin", component: SigninComponent, children: []
    },
    {
        path: "**", component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
