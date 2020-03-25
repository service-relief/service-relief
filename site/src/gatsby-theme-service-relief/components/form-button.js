import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <>
    <Link
      to="/submit"
      className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4"
    >
      Submit your local site &rarr;
    </Link>
    <Link
      to="/start"
      className="bg-transparent text-blue-700 hover:underline font-semibold py-2 px-4"
    >
      Build your own directory
    </Link>
  </>
)
