'use client'


import Profile from '@components/Profile'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

const MyProfile = () => {

    // current user data
    const { data: session } = useSession();

    const [posts, setPost] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${session?.user.id}/posts`);
            const data = await response.json();

            setPost(data);
            // console.log(data)
        }

       if(session?.user.id) fetchPosts();
    }, [])

    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post._id}`);
    }
    

    const handleDelete = async (post) => {
        const hasConfirmed = confirm("Are you sure?");

        if (hasConfirmed) {
            try {
                await fetch(`api/prompt/${post._id.toString()}`, {
                    method: 'DELETE'
                })

                const filterdPosts = posts.filter((p) => p._id !== post._id)

                setPost(filterdPosts);
            } catch (error) {
                console.log(error);
            }
        }
    }
    // console.log("user.id",session?.user.id)

    return (
        <Profile
            name="My"
            desc="Wellcome to your Profile page"
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
}

export default MyProfile
