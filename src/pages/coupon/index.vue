<template>
  <demo-section class="demo-coupon">
    <demo-block :title="t('basicUsage')">
      <van-coupon-cell
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        @click="showList = true"
      />

      <van-popup
        v-model="showList"
        round
        position="bottom"
        duration="0.3"
        style="height: 90%; padding-top: 4px;"
      >
        <van-coupon-list
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          :disabled-coupons="disabledCoupons"
          :show-count="false"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup>
    </demo-block>
  </demo-section>
</template>

<script>
import { CouponCell, CouponList, Popup } from 'vant'

export default {
  components: {
    'van-coupon-list': CouponList,
    'van-coupon-cell': CouponCell,
    'van-popup': Popup
  },
  i18n: {
    'zh-CN': {
      coupon: {
        name: '优惠券名称',
        reason: '优惠券不可用原因',
        description: '描述信息',
      },
      exchange: '兑换成功',
    },
    'en-US': {
      coupon: {
        name: 'Coupon name',
        reason: 'Coupon unavailable reason',
        description: 'Description',
      },
      exchange: 'Success',
    },
  },
  data() {
    return {
      showList: false,
      chosenCoupon: -1,
      exchangedCoupons: [],
    };
  },
  computed: {
    coupons() {
      return [this.coupon, this.discountCoupon, ...this.exchangedCoupons];
    },
    disabledCoupons() {
      return [this.disabledCoupon, this.disabledDiscountCoupon];
    },
    coupon() {
      return {
        id: 1,
        condition: '无使用门槛\n最多优惠12元',
        reason: '',
        value: 150,
        name: this.t('coupon.name'),
        description: this.t('coupon.description'),
        startAt: 1489104000,
        endAt: 1514592000,
        valueDesc: '1.5',
        unitDesc: '元',
      };
    },
    discountCoupon() {
      return {
        ...this.coupon,
        id: 2,
        value: 12,
        valueDesc: '8.8',
        unitDesc: '折',
      };
    },
    disabledCoupon() {
      return {
        ...this.coupon,
        id: 3,
        reason: this.t('coupon.reason'),
      };
    },
    disabledDiscountCoupon() {
      return {
        ...this.discountCoupon,
        valueDesc: '1',
        unitDesc: '折',
        id: 4,
        reason: this.t('coupon.reason'),
      };
    },
  },
  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange() {
      this.$toast(this.t('exchange'));
      this.exchangedCoupons.push({
        ...this.coupon,
        id: this.randomId(),
      });
    },
    randomId(max = 999999) {
      return Math.floor(Math.random() * max) + 1;
    },
  },
};
</script>

<style lang="less">
.van-coupon-list {
  .van-tabs__line {
    display: none;
  }
  .van-tab.van-tab--active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -20px;
    z-index: 1;
    width: 40px;
    height: 3px;
    background-color: #ee0a24;
    border-radius: 3px;
  }
}
</style>
