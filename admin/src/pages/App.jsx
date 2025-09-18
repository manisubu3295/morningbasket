import React, { useEffect, useState } from 'react'

const API = import.meta.env.VITE_API || 'http://localhost:4000'

function useFetch(path){
  const [data,setData] = useState(null)
  useEffect(()=>{ fetch(API+path).then(r=>r.json()).then(setData).catch(()=>setData({error:true})) },[path])
  return data
}

export default function App(){
  const summary = useFetch('/reports/summary')
  const orders = useFetch('/orders')
  const products = useFetch('/products')
  const users = useFetch('/users')

  return (
    <div>
      <div className="top">
        <strong>MorningBasket Admin</strong>
        <nav>
          <a href="#dashboard" className="active">Dashboard</a>
          <a href="#orders">Orders</a>
          <a href="#products">Products</a>
          <a href="#users">Users</a>
          <a href="#reports">Reports</a>
        </nav>
      </div>

      <div className="wrap">
        <section id="dashboard" className="grid">
          <div className="card">
            <div className="h2">Today</div>
            <pre>{JSON.stringify(summary?.today,null,2)}</pre>
          </div>
          <div className="card">
            <div className="h2">Week</div>
            <pre>{JSON.stringify(summary?.week,null,2)}</pre>
          </div>
          <div className="card">
            <div className="h2">Month</div>
            <pre>{JSON.stringify(summary?.month,null,2)}</pre>
          </div>
        </section>

        <section id="orders" className="card" style={{marginTop:16}}>
          <div className="h2">Orders</div>
          <table className="table">
            <thead><tr><th>ID</th><th>Status</th><th>Created</th></tr></thead>
            <tbody>
              {(orders||[]).map(o=>(<tr key={o.id}><td>{o.id}</td><td>{o.status}</td><td>{o.createdAt}</td></tr>))}
            </tbody>
          </table>
        </section>

        <section id="products" className="card" style={{marginTop:16}}>
          <div className="h2">Products</div>
          <table className="table">
            <thead><tr><th>ID</th><th>Name</th><th>Category</th><th>Price</th><th>Stock</th></tr></thead>
            <tbody>
              {(products||[]).map(p=>(<tr key={p.id}><td>{p.id}</td><td>{p.name}</td><td>{p.category}</td><td>₹{p.price}</td><td>{p.stock}</td></tr>))}
            </tbody>
          </table>
        </section>

        <section id="users" className="card" style={{marginTop:16}}>
          <div className="h2">Users</div>
          <pre>{JSON.stringify(users,null,2)}</pre>
        </section>

        <section id="reports" className="card" style={{marginTop:16}}>
          <div className="h2">API</div>
          <p>Using API base: <code>{API}</code></p>
        </section>
      </div>
    </div>
  )
}
