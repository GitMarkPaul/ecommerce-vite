<template>
    <section class="padding-bottom-3">
        <div class="container">
            <div class="bread">
                <ol class="bread-menu">
                    <li class="bread-item">
                        <router-link :to="{ name: 'Home' }" class="bread-link">Home</router-link>
                    </li>
                    <li class="bread-item">
                        <router-link :to="{ name: 'Account' }" class="bread-link">Account</router-link>
                    </li>
                    <li class="bread-item">
                        <router-link :to="{ name: 'Orders' }" class="bread-link">Orders</router-link>
                    </li>
                    <li class="bread-item">
                        <div class="bread-link" aria-current="page">Order Tracking</div>
                    </li>
                </ol>
                <h4>Completed</h4>
            </div>

            <div class="row g-4 mt-2">
                <div class="col-xl-5">
                    <div class="row g-3">
                        <div class="col-xl-12">
                            <div class="card round">
                                <div class="body">
                                    <div class="d-flex align-items-center gap-3">
                                        <div class="initial-circle-md rounded-4">
                                            <img src="../assets/placeholders/product-placeholder.png" alt="" width="100%" height="100%">
                                        </div>
                                        <div>
                                            <div class="font-size-16 font-weight-500">Delivered on <span class="text-color-danger">Thu, 15 Sept 2022</span></div>
                                            <div class="font-size-14">Shipped with Standard Local - Auda Xpress</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="d-flex gap-2">
                                <a href="" class="button-outline-primary round block md">Return/Refund</a>
                                <a href="" class="button-primary round block md">Order Received</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-7">
                    <div class="card round">
                        <div class="body">
                            <div class="d-flex align-items-center gap-3">
                                <div class="initial-circle-md rounded-4">
                                    <span class="material-symbols-rounded">insights</span>
                                </div>
                                <div>
                                    <div class="font-size-16 font-weight-500">
                                        #SDG34637336822 
                                        
                                    </div>
                                    <div class="font-size-13">Order Tracking Number</div>
                                </div>
                            </div>
                            <button class="button-link-dark circle position-absolute top-0 right-0 my-3 mx-3"><span class="material-symbols-rounded">content_copy</span></button>
                        </div>
                    </div>

                    <ul class="timeline mt-4 mx-3">
                        <li>
                            <div>15 Sept 10:40</div>
                            <div>Parcel has been delivered</div>
                            <div>Recipient: Juan Dela Cruz - Driver: TO_2WH_Doe_John</div>
                        </li>
                        <li>
                            <div>15 Sept 06:29</div>
                            <div>Parcel is out for delivery</div>
                        </li>
                        <li>
                            <div>15 Sept 06:28</div>
                            <div>Parcel has arrived at the delivery hub: Taguig Hub</div>
                        </li>
                        <li>
                            <div>14 Sept 10:38</div>
                            <div>Parcel has departed from sorting facility</div>
                        </li>
                        <li>
                            <div>13 Sept 14:37</div>
                            <div>Parcel has arrived at sorting facility: SOC 3</div>
                        </li>
                        <li>
                            <div>13 Sept 06:03</div>
                            <div>Parcel has departed from sorting facility</div>
                        </li>
                        <li>
                            <div>12 Sept 20:18</div>
                            <div>Parcel has arrived at sorting facility: DOP - FM - Arca North</div>
                        </li>
                        <li>
                            <div>12 Sept 16:30</div>
                            <div>Parcel has been picked up by our logistics partner</div>
                        </li>
                        <li>
                            <div>11 Sept. 22:34</div>
                            <div>Sender is preparing to ship your parcel</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.timeline {
    position: relative;
    list-style: none;
    padding: 0;

    li {
        padding-bottom: 1.5rem;
        border-left: 3px solid var(--color-medium);
        position: relative;
        padding-left: 1.7rem;
        color: rgba(var(--color-dark-rgb), 0.5);

        &:first-child {
            font-weight: 600;
            color: var(--color-primary);

            &:before{
                width: 16px;
                height: 16px;
                background: var(--color-primary);
            }
        }

        &:last-child {
            border: 0px;
            padding-bottom: 0;

            &:before {
                left: -7px;
            }
        }

        &:before{
            content: '';
            width: 15px;
            height: 15px;
            background: var(--color-medium);
            border-radius: 50%;
            position: absolute;
            left: -9px;
            top: 0px;
        }
    }
}
</style>