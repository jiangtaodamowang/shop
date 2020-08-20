export default {
    addCart(context,payload) {
        return new Promise((reslove,reject)=>{
          //payload 新添加的商品
         //查找数组之前是否有该商品
          let oldProduct = null
          for(let item of context.state.cartList) {
              if(item.iid === payload.iid) {
                oldProduct = item
              }
            }
          if(oldProduct) {
              // oldProduct.count += 1
              context.commit('addCounter',oldProduct)
              reslove('当前数量加一')
          } else {
              payload.count = 1
              // context.state.cartList.push(payload)
              context.commit('addToCart',payload)
              reslove('添加了新商品')
            }
          })
    }
}