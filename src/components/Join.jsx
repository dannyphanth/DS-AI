function Join() {
    return (
        <div className="space-y-12">
            <h1 className="text-4xl font-heading font-bold">Join Our Club</h1>

            {/* Benefits Section */}
            <section className="grid md:grid-cols-2 gap-8">
                <div className="p-6 rounded-lg bg-white/5">
                    <h2 className="text-2xl font-heading font-semibold mb-4">Why Join?</h2>
                    <ul className="space-y-3 text-gray-300">
                        <li>• Access to exclusive workshops and training sessions</li>
                        <li>• Network with industry professionals</li>
                        <li>• Work on real-world projects</li>
                        <li>• Build your portfolio</li>
                        <li>• Learn from experienced peers</li>
                        <li>• Get mentorship opportunities</li>
                    </ul>
                </div>

                <div className="p-6 rounded-lg bg-white/5">
                    <h2 className="text-2xl font-heading font-semibold mb-4">Membership Benefits</h2>
                    <ul className="space-y-3 text-gray-300">
                        <li>• Free access to all club events</li>
                        <li>• Priority registration for workshops</li>
                        <li>• Access to learning resources</li>
                        <li>• Project collaboration opportunities</li>
                        <li>• Resume building workshops</li>
                        <li>• Industry networking events</li>
                    </ul>
                </div>
            </section>

            {/* Membership Form */}
            <section className="p-6 rounded-lg bg-white/5">
                <h2 className="text-2xl font-heading font-semibold mb-6">Apply for Membership</h2>
                <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:border-accent focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:border-accent focus:outline-none"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:border-accent focus:outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="major" className="block text-sm font-medium mb-2">
                            Major
                        </label>
                        <input
                            type="text"
                            id="major"
                            className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:border-accent focus:outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="interests" className="block text-sm font-medium mb-2">
                            Areas of Interest
                        </label>
                        <textarea
                            id="interests"
                            rows="4"
                            className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:border-accent focus:outline-none"
                            placeholder="Tell us about your interests in data science and AI..."
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit Application
                    </button>
                </form>
            </section>
        </div>
    )
}

export default Join 